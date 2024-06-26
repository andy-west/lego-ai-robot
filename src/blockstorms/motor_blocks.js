Blockly.Msg.MOTORS_HUE = 75;

Blockly.Blocks["set_motor_state"] = {
    init: function() {
        var motorDropdown = new Blockly.FieldDropdown([
                ["A", "0x01"],
                ["B", "0x02"],
                ["C", "0x04"]
            ]);

        var stateDropdown = new Blockly.FieldDropdown([
                ["On", "0x80"],
                ["Off", "0x40"],
                ["Float/Coast", "0x00"]
            ]);

        this.appendDummyInput()
            .appendField("set motor")
            .appendField(motorDropdown, "MOTOR")
            .appendField("to")
            .appendField(stateDropdown, "STATE");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.MOTORS_HUE);
        this.setTooltip("Sets a motor's state.");
    }
};

Blockly.Python["set_motor_state"] = function(block) {
    if (!Blockly.Python.definitions_["import_subprocess"]) {
        Blockly.Python.definitions_["import_subprocess"] = "import subprocess";
    }

    const motor = block.getFieldValue("MOTOR");
    const state = block.getFieldValue("STATE");
    const command = motor | state;

    const code = "subprocess.run(['nqc', '-raw', '21" + toHexByte(command) + "'])\n";

    return code;
};

Blockly.Blocks["set_motor_direction"] = {
    init: function() {
        var motorDropdown = new Blockly.FieldDropdown([
                ["A", "0x01"],
                ["B", "0x02"],
                ["C", "0x04"]
            ]);

        var directionDropdown = new Blockly.FieldDropdown([
                ["forward", "0x80"],
                ["reverse", "0x00"]
            ]);

        var flipDropdown = new Blockly.FieldDropdown([
                ["do not flip", "0x00"],
                ["flip", "0x40"]
            ]);

        this.appendDummyInput()
            .appendField("set motor")
            .appendField(motorDropdown, "MOTOR")
            .appendField("to")
            .appendField(directionDropdown, "DIRECTION")
            .appendField("and")
            .appendField(flipDropdown, "FLIP")
            .appendField("the directions");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.MOTORS_HUE);
        this.setTooltip("Sets a motor's direction.");
    }
};

Blockly.Python["set_motor_direction"] = function(block) {
    if (!Blockly.Python.definitions_["import_subprocess"]) {
        Blockly.Python.definitions_["import_subprocess"] = "import subprocess";
    }

    const motor = block.getFieldValue("MOTOR");
    const direction = block.getFieldValue("DIRECTION");
    const flip = block.getFieldValue("FLIP");
    const command = motor | direction | flip;

    const code = "subprocess.run(['nqc', '-raw', 'E1" + toHexByte(command) + "'])\n";

    return code;
};

Blockly.Blocks["set_motor_power"] = {
    init: function() {
        var motorDropdown = new Blockly.FieldDropdown([
                ["A", "0x01"],
                ["B", "0x02"],
                ["C", "0x04"]
            ]);

        var levelDropdown = new Blockly.FieldDropdown([
                ["1", "0"],
                ["2", "1"],
                ["3", "2"],
                ["4", "3"],
                ["5", "4"],
                ["6", "5"],
                ["7", "6"],
                ["8", "7"],
            ]);

        this.appendDummyInput()
            .appendField("set motor")
            .appendField(motorDropdown, "MOTOR")
            .appendField("power to")
            .appendField(levelDropdown, "LEVEL");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.MOTORS_HUE);
        this.setTooltip("Sets a motor's power.");
    }
};

Blockly.Python["set_motor_power"] = function(block) {
    if (!Blockly.Python.definitions_["import_subprocess"]) {
        Blockly.Python.definitions_["import_subprocess"] = "import subprocess";
    }

    const motor = block.getFieldValue("MOTOR");
    const level = block.getFieldValue("LEVEL");

    const code = "subprocess.run(['nqc', '-raw', '13" + toHexByte(motor) + "02" + toHexByte(level) + "'])\n";

    return code;
};
