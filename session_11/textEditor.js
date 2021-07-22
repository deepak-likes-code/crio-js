class TextEditor {

    constructor() {
        this.file = '';
        this.buffer = [];
    }

    writeStream(value) {
        if (typeof value !== 'string') throw new TypeError('Value Not a String')
        this.buffer.push(value)
        return this;
    }

    undo() {
        this.buffer.pop();
        return this;
    }

    saveFile() {
        this.file = ''
        for (let i = 0; i < this.buffer.length; i++) {
            this.file += this.buffer[i];
        };
        return this.file;

    }

    printFile() {
        console.log(this.file)
        return this
    }

}

let txt = new TextEditor();
