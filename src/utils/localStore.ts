import { filter, map, Subject } from "rxjs";
import { isEqual, PlainObject } from "./isEqual";

export class LocalStore<T> {

    private SubGroup: SubGroup;
    private Store: Store<T>;

    constructor(private InitValue: T) {
        this.SubGroup = new SubGroup();
        this.SubGroup.Add('data');

        const SubStore = this.SubGroup.Get('data');
        this.Store = new Store(InitValue, SubStore);
    }

    AddSub(name: string) {
        this.SubGroup.Add(name);
        return this;
    }

    NextSub(name: string) {
        return this.SubGroup.Get(name);
    }

    GetSub(name: string = 'data', fn = (x: any) => x) {
        return this.SubGroup.Get(name).asObservable().pipe(map(fn), filter(x => x !== undefined));
    }

    GetData() {
        return this.Store.Get();
    }

    SetData(option: Partial<T>) {
        return this.Store.Set(option);
    }
}

type TInitValue = {
    placeholder: string,
    value: string,
    required: boolean
}

class SubGroup {  //наблюдатель для каждого ключа string

    private Group: Record<string, Subject<any>> = {}; //record- определение словаря с парами ключ/значение

    public Add(name: string) {
        this.Group[name] = new Subject();
        return this;
    }

    public Get(name: string) {
        return this.Group[name];
    }
}

class Store<T> {

    constructor(private Store: T, private Subject: Subject<Partial<T>>) { } //инициализация с начальным состоянием и потоком subject

    public Set(option: Partial<T>) { //метод для обновления состояния
        for (const key in option) {
            if (this.Store[key] !== option[key] && !isEqual((this.Store[key] as PlainObject), (option[key]) as PlainObject)) {
                this.Store[key] = option[key]!;
                //@ts-ignore
                this.Subject.next((Object.assign({}, {
                    [key]: this.Store[key]
                })) as Partial<T>);
            }
        }

        return this;
    }

    public Get() { //возврат копии текущего состояния хранилища
        return Object.assign({}, this.Store);
    }
}



