export class Page {
    private linkPage: string = "https://devexpress.github.io/testcafe/example/";
    getLinkPage(): string {
        return this.linkPage;
    }
    setLinkPage(link: string) {
        this.linkPage = link;
    }
}