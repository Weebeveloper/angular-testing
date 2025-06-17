interface machlakaModelProperties {
  readonly machlakaId: string;
  readonly kodKli: string;
  readonly machlakaDescription: string;
}

export class machlakaModel implements machlakaModelProperties {
  readonly machlakaId!: string;
  readonly kodKli!: string;
  readonly machlakaDescription!: string;

  constructor(private readonly props: machlakaModelProperties) {
    Object.assign(this, props);
  }
}
