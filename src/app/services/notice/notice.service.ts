import { Injectable } from "@angular/core";
import { timer } from "rxjs";
import { TNotice } from "src/app/module/components/notice-content";
import * as uuid from "uuid";

@Injectable()
export class NoticeService {

    public NoticeContent: TNotice[] = [];
    

    public getNotice(): TNotice[] {

        return [...this.NoticeContent];
    }

    public success(message: string, content?: string) {

        const noticeId = uuid.v4()
        this.NoticeContent.push({
            Id: noticeId,
            Message: message,
            Type: 'success',
            Content: content
        });

        timer(6000).subscribe(() => {
            this.removeNotice(noticeId);
        });
    };

    public edit(message: string, content?: string) {

        const noticeId = uuid.v4()
        this.NoticeContent.push({
            Id: noticeId,
            Message: message,
            Type: 'edit',
            Content: content
        });

        timer(6000).subscribe(() => {
            this.removeNotice(noticeId);
        });
    };

    public warning(message: string, content?: string) {

        const noticeId = uuid.v4()
        this.NoticeContent.push({
            Id: noticeId,
            Message: message,
            Type: 'warning',
            Content: content
        });

        timer(6000).subscribe(() => {
            this.removeNotice(noticeId);
        });
    };

    public delete(message: string, content?: string) {

        const noticeId = uuid.v4()
        this.NoticeContent.push({
            Id: noticeId,
            Message: message,
            Type: 'delet',
            Content: content
        });

        timer(6000).subscribe(() => {
            this.removeNotice(noticeId);
        });
    };

    public removeNotice(noticeId: string) {

        const index = this.NoticeContent.findIndex(notice => notice.Id === noticeId);

        if (index !== -1) {
            this.NoticeContent.splice(index, 1);
        }
    }
}
