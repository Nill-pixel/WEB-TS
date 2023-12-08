import { Colletion } from "../models/Colletion";

export abstract class ColletionView<T, K>{
    constructor(public parent: Element, public colletion: Colletion<T, K>) { }

    abstract renderItem(model: T, itemParent: Element): void

    render(): void {
        this.parent.innerHTML = ''

        const templateElement = document.createElement('template')

        for (let model of this.colletion.models) {
            const itemParent = document.createElement('div')
            this.renderItem(model, itemParent)
            templateElement.content.append(itemParent)
        }

        this.parent.append(templateElement.content)
    }
}