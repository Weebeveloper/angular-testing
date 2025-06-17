interface kodKliModelProperties {
  readonly kodKli: string;
  readonly kodKliDescription: string;
}

export class kodKliModel implements kodKliModelProperties {
  readonly kodKli!: string;
  readonly kodKliDescription!: string;

  constructor(private readonly props: kodKliModelProperties) {
    Object.assign(this, props);
  }
}
