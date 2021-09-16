function whoami(target: Function): void {
    console.log('decorator');
}

@whoami
class Friend {
    constructor(private name: string, private age: number) {}
}