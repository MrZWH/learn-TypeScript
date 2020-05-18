import superagent from 'superagent';

class Crawler {
  async getRawHtml() {
    const result = await superagent.get(this.url);
    this.rawHtml = result.text;
  }
  private secret = 'secretKey';
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`
  private rawHtml = '';
  constructor() {
    this.getRawHtml();
  }
}

const crowller = new Crawler()
