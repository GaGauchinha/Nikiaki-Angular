export class Receita {

 // private _receita_id?: number;
  private _receita_nome?: string;
  private _receita_categoria?: string;
  private _receita_ingredientes?: string;
  private _receita_porcoes?: string;
  private _receita_tempodepreparo?: string;
  // get receita_id(): number {
  //   return <number>this.receita_id;
  // }
  //
  // set receita_id(value: number) {
  //   this._receita_id = value;
  // }

  get receita_nome(): string {
    return <string>this._receita_nome;
  }

  set receita_nome(value: string) {
    this._receita_nome = value;
  }

  get receita_categoria(): string {
    return <string>this.receita_categoria;
  }

  set receita_categoria(value: string) {
    this._receita_categoria = value;
  }

  get receita_ingredientes(): string {
    return <string>this.receita_ingredientes;
  }

  set receita_ingredientes(value: string) {
    this._receita_ingredientes = value;
  }

  get receita_porcoes(): string {
    return <string>this.receita_porcoes;
  }

  set receita_porcoes(value: string) {
    this._receita_porcoes = value;
  }

  get receita_tempodepreparo(): string {
    return <string>this.receita_tempodepreparo;
  }

  set receita_tempodepreparo(value: string) {
    this._receita_tempodepreparo = value;
  }

  constructor(
  //  receita_id?: number,
    receita_nome?: string,
    receita_categoria?: string,
    receita_ingredientes?: string,
    receita_porcoes?: string,
    receita_tempodepreparo?: string) {
   // this._receita_id = receita_id;
    this._receita_nome = receita_nome;
    this._receita_categoria = receita_categoria;
    this._receita_ingredientes = receita_ingredientes;
    this._receita_porcoes = receita_porcoes;
    this._receita_tempodepreparo = receita_tempodepreparo;
  }
}
