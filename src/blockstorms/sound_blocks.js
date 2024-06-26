Blockly.Msg.SOUND_HUE = 0;

Blockly.Blocks["play_note"] = {
    init: function() {
        var notesDropdown = new Blockly.FieldDropdown([
                ["G#", "3322"],
                ["G",  "3136"],
                ["F#", "2960"],
                ["F",  "2793"],
                ["E",  "2637"],
                ["D#", "2489"],
                ["D",  "2349"],
                ["C#", "2218"],
                ["C",  "2093"],
                ["B",  "1976"],
                ["A#", "1865"],
                ["A",  "1760"]
            ]);

        var octaveDropdown = new Blockly.FieldDropdown([
                ["1", "64"],
                ["2", "32"],
                ["3", "16"],
                ["4", "8"],
                ["5", "4"],
                ["6", "2"],
                ["7", "1"]
            ]);

        this.appendDummyInput()
            .appendField("play note")
            .appendField(notesDropdown, "NOTES")
            .appendField("in octave")
            .appendField(octaveDropdown, "OCTAVES")
            .appendField("for")
            .appendField(new Blockly.FieldNumber(0.5, 0.01, 2.55), "SECONDS")
            .appendField("seconds");

        notesDropdown.setValue("2093");  // Note C
        octaveDropdown.setValue("16");  // Octave 3
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg.SOUND_HUE);
        this.setTooltip("Plays a note.");
    }
};

Blockly.Python["play_note"] = function(block) {
    if (!Blockly.Python.definitions_["import_subprocess"]) {
        Blockly.Python.definitions_["import_subprocess"] = "import subprocess";
    }

    const note = block.getFieldValue("NOTES");
    const octave = block.getFieldValue("OCTAVES");
    const frequency = Math.round(parseFloat(note) / parseFloat(octave));
    const centiseconds = Math.round(block.getFieldValue("SECONDS") * 100);

    const code = "subprocess.run(['nqc', '-raw', '23" + toHexShort(frequency) + toHexByte(centiseconds) + "'])\n";

    return code;
};
