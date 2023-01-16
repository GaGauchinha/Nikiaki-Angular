export class ContaUsuario {

  private _usuario_id?: number;
  private _usuario_username?: string;
  private _usuario_nome?: string;
  private _usuario_senha?: string;
  private _usuario_email?: string;
  private _usuario_cpf?: string;
  private _usuario_celular?: string;

  private _token?: string;
  private _is_admin?: boolean;

  constructor(
    usuario_id?: number,
    usuario_username?: string,
    usuario_nome?: string,
    usuario_senha?: string,
    usuario_email?: string,
    usuario_cpf?: string,
    usuario_celular?: string,
    token?: string,
    is_admin?: boolean) {
      this._usuario_id = usuario_id;
      this._usuario_username = usuario_username;
      this._usuario_nome = usuario_nome;
      this._usuario_senha = usuario_senha;
      this._usuario_email = usuario_email;
      this._usuario_cpf = usuario_cpf;
      this._usuario_celular = usuario_celular;
      this._token = token;
      this._is_admin = is_admin;
  }

  get usuario_id(): number {
    return <number>this._usuario_id;
  }

  set usuario_id(value: number) {
    this._usuario_id = value;
  }

  get usuario_username(): string {
    return <string>this._usuario_username;
  }

  set usuario_username(value: string) {
    this._usuario_username = value;
  }

  get usuario_nome(): string {
    return <string>this._usuario_nome;
  }

  set usuario_nome(value: string) {
    this._usuario_nome = value;
  }

  get usuario_senha(): string {
    return <string>this._usuario_senha;
  }

  set usuario_senha(value: string) {
    this._usuario_senha = value;
  }

  get usuario_email(): string {
    return <string>this._usuario_email;
  }

  set usuario_email(value: string) {
    this._usuario_email = value;
  }

  get usuario_cpf(): string {
    return <string>this._usuario_cpf;
  }

  set usuario_cpf(value: string) {
    this._usuario_cpf = value;
  }

  get usuario_celular(): string {
    return <string>this._usuario_celular;
  }

  set usuario_celular(value: string) {
    this._usuario_celular = value;
  }
  get token(): string {
    return <string>this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get is_admin(): boolean {
    return <boolean>this._is_admin;
  }

  set is_admin(value: boolean) {
    this._is_admin = value;
  }
}
