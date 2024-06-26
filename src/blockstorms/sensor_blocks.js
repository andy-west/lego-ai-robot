Blockly.Msg.SENSORS_HUE = 20;

Blockly.Blocks["set_sensor_type"] = {
    init: function() {
        var sensorDropdown = new Blockly.FieldDropdown([
                ["1", "0"],
                ["2", "1"],
                ["3", "2"]
            ]);

        var typeDropdown = new Blockly.FieldDropdown([
                ["Raw", "0"],
                ["Touch", "1"],
                ["Temperature", "2"],
                ["Light", "3"],
                ["Rotation", "4"]
            ]);

        this.appendDummyInput()
            .appendField("set type of sensor")
            .appendField(sensorDropdown, "SENSOR")
            .appendField("to")
            .appendField(typeDropdown, "TYPE");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.SENSORS_HUE);
        this.setTooltip("Sets a sensor's type.");
    }
};

Blockly.Python["set_sensor_type"] = function(block) {
    if (!Blockly.Python.definitions_["import_subprocess"]) {
        Blockly.Python.definitions_["import_subprocess"] = "import subprocess";
    }

    const sensor = block.getFieldValue("SENSOR");
    const type = block.getFieldValue("TYPE");

    const code = "subprocess.run(['nqc', '-raw', '32" + toHexByte(sensor) + toHexByte(type) + "'])\n";

    return code;
};

Blockly.Blocks["get_sensor_value"] = {
    init: function() {
        var sensorDropdown = new Blockly.FieldDropdown([
                ["1", "0"],
                ["2", "1"],
                ["3", "2"]
            ]);

        this.appendDummyInput()
            .appendField("sensor")
            .appendField(sensorDropdown, "SENSOR")
            .appendField("value");

        this.setOutput(true, 'Number');
        this.setColour(Blockly.Msg.SENSORS_HUE);
        this.setTooltip("Gets a sensor value.");
    }
};

Blockly.Python["get_sensor_value"] = function(block) {
    if (!Blockly.Python.definitions_["import_subprocess"]) {
        Blockly.Python.definitions_["import_subprocess"] = "import subprocess";
    }

    const sensor = block.getFieldValue("SENSOR");

    const code = "(int(''.join(subprocess.run(['nqc', '-raw', '1209" + toHexByte(sensor) + "'], " +
        "capture_output=True, text=True).stdout.strip().split(' ')[::-1]), 16))";

    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks["battery_power"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("battery power");

        this.setOutput(true, 'Number');
        this.setColour(Blockly.Msg.SENSORS_HUE);
        this.setTooltip("Gets the RCX battery voltage. A fresh set of batteries provides around 9.3V.");
    }
};

Blockly.Python["battery_power"] = function(block) {
    if (!Blockly.Python.definitions_["import_subprocess"]) {
        Blockly.Python.definitions_["import_subprocess"] = "import subprocess";
    }

    const code = "(int(''.join(subprocess.run(['nqc', '-raw', '30'], " +
        "capture_output=True, text=True).stdout.strip().split(' ')[::-1]), 16) / 1000.0)";

    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks["capture_image"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("capture camera image to file")
            .appendField(new Blockly.FieldTextInput("test.jpg"), "IMAGEPATH");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.SENSORS_HUE);
        this.setTooltip("Captures a camera image to a file.");
    }
};

Blockly.Python["capture_image"] = function(block) {
    if (!Blockly.Python.definitions_["import_subprocess"]) {
        Blockly.Python.definitions_["import_subprocess"] = "import subprocess";
    }

    const imagePath = block.getFieldValue("IMAGEPATH");

    const code = "subprocess.run(['libcamera-still', '--width=1296', '--height=972', '-o" + imagePath + "'])\n";

    return code;
};
