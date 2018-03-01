export class ChatMessage {

  constructor(
    public id: number,
    public contents: string,
    public highlighted: boolean,
    public hoverText?: string
  ) {}

}
