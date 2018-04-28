export class IdeaItem {
    $key?: string;
    email?: string;
    userName?: string;
    title?: string;
    description?: string;
    topic?: string;
    timeStamp?: Date = new Date();
    likers?: string[];
    dislikers?: string[];
}