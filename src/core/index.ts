class InputPin {
    value: boolean = false;
    connectedTo: Wire | null = null;

    propagateSignal() {
        if (!this.connectedTo) {
            return;
        }
        this.connectedTo.value = this.value;
    }
}

class OutputPin {
    value: boolean = false;
    connectedTo: Wire | null = null;

    printValue() {
        console.log('Output value:', this.value);
    }
}

class AndGate {
    inputsValues: boolean[] = [false, false];
    outputValue: boolean = false;

    outputConnectedTo: Wire | null = null;

    evalute() {
        this.outputValue = this.inputsValues.every((v) => v);
    }

    propagateSignal() {
        this.evalute();

        if (!this.outputConnectedTo) {
            return;
        }
        this.outputConnectedTo.value = this.outputValue;
    }
}

class Wire {
    value: boolean = false;
    connectedTo: (OutputPin | AndGate) | null = null;
    inputIndex: number | null = null; // only for gates

    propagateSignal() {
        if (!this.connectedTo) {
            return;
        }
        if (this.connectedTo instanceof OutputPin) {
            this.connectedTo.value = this.value;
        } else if (
            this.connectedTo instanceof AndGate &&
            this.inputIndex !== null
        ) {
            this.connectedTo.inputsValues[this.inputIndex] = this.value;
        }
    }
}

// build circuit
// components
const inPinA = new InputPin();
const inPinB = new InputPin();

const wirea = new Wire();
const wireb = new Wire();

const and = new AndGate();
const outWire = new Wire();

const outPin = new OutputPin();

// connections
inPinA.connectedTo = wirea;
inPinB.connectedTo = wireb;

wirea.connectedTo = and;
wirea.inputIndex = 0;

wireb.connectedTo = and;
wireb.inputIndex = 1;

and.outputConnectedTo = outWire;
outWire.connectedTo = outPin;

inPinA.value = false;
inPinB.value = true;

// evaluate circuit
inPinA.propagateSignal();
inPinB.propagateSignal();

wirea.propagateSignal();
wireb.propagateSignal();

and.propagateSignal();

outWire.propagateSignal();
outPin.printValue();
