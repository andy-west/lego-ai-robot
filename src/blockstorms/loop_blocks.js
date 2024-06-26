Blockly.Blocks["python_sleep"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("sleep for")
            .appendField(new Blockly.FieldNumber(5, 0, 60), "DURATION")
            .appendField("seconds");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.LOOPS_HUE);
        this.setTooltip("Pauses the program for a number of seconds.");
    }
};

Blockly.Python["python_sleep"] = function(block) {
    if (!Blockly.Python.definitions_["import_time"]) {
        Blockly.Python.definitions_["import_time"] = "import time";
    }

    const duration = block.getFieldValue("DURATION");
    const code = "time.sleep(" + duration + ")\n";

    return code;
};
