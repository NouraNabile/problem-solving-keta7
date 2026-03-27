
Object.defineProperty(
    String.prototype,
    'toJadenCase',
    { value :
    function toJadenCase() {
        return this.split(" ").map((word)=>word[0].toUpperCase + word.substring(1)).join(" ")
    }
    }
    );