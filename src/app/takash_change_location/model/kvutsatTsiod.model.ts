interface kvutsatTsiodModelProperties {
  readonly kvutsatTsiodId: number;
  readonly kvutsatTsiodDescription: string;
}

export class kvutsatTsiodModel implements kvutsatTsiodModelProperties {
  readonly kvutsatTsiodId!: number;
  readonly kvutsatTsiodDescription!: string;

  constructor(private readonly props: kvutsatTsiodModelProperties) {
    Object.assign(this, props);
  }
}
