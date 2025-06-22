interface madorModelProperties {
  readonly madorId: number;
  readonly madorDescription: string;
}

export class madorModel implements madorModelProperties {
  readonly madorId!: number;
  readonly madorDescription!: string;

  constructor(private readonly props: madorModelProperties) {
    Object.assign(this, props);
  }
}
