import { Component } from "@angular/core";
import { MarkdownService } from "../service/markdown.service";
@Component({
  selector: "app-root",
  template: `
    <button (click)="compileMarkdown()">compile</button>
    <div>{{ result }}</div>
  `
})
export class MarkdownComponent {
  result: string = "";
  constructor(private markdown: MarkdownService) {}
  async compileMarkdown() {
    this.result = await this.markdown.compile(`## Hello Comlink`);
  }
}
