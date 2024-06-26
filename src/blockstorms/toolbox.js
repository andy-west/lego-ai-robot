const toolbox = `
    <xml id="toolbox" style="display: none">
        <category name="Logic" colour="%{BKY_LOGIC_HUE}">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
            <block type="logic_null"></block>
            <block type="logic_ternary"></block>
        </category>
        <category name="Loops" colour="%{BKY_LOOPS_HUE}">
            <block type="python_sleep"></block>
            <block type="controls_repeat_ext">
                <value name="TIMES">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="controls_whileUntil"></block>
            <block type="controls_for">
                <value name="FROM">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="TO">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
                <value name="BY">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="controls_forEach"></block>
            <block type="controls_flow_statements"></block>
        </category>
        <category name="Math" colour="%{BKY_MATH_HUE}">
            <block type="math_number"></block>
            <block type="math_arithmetic"></block>
            <block type="math_single"></block>
            <block type="math_trig"></block>
            <block type="math_constant"></block>
            <block type="math_number_property"></block>
            <block type="math_round"></block>
            <block type="math_on_list"></block>
            <block type="math_modulo"></block>
            <block type="math_constrain"></block>
            <block type="math_random_int"></block>
            <block type="math_random_float"></block>
        </category>
        <category name="Text" colour="%{BKY_TEXTS_HUE}">
            <block type="text"></block>
            <block type="text_join"></block>
            <block type="text_append"></block>
            <block type="text_length"></block>
            <block type="text_isEmpty"></block>
            <block type="text_indexOf"></block>
            <block type="text_charAt"></block>
            <block type="text_getSubstring"></block>
            <block type="text_changeCase"></block>
            <block type="text_trim"></block>
            <block type="text_print"></block>
            <block type="text_prompt_ext"></block>
        </category>
        <category name="Lists" colour="%{BKY_LISTS_HUE}">
            <block type="lists_create_with"></block>
            <block type="lists_repeat"></block>
            <block type="lists_length"></block>
            <block type="lists_isEmpty"></block>
            <block type="lists_indexOf"></block>
            <block type="lists_getIndex"></block>
            <block type="lists_setIndex"></block>
            <block type="lists_getSublist"></block>
            <block type="lists_split"></block>
            <block type="lists_sort"></block>
        </category>
        <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}"></category>
        <category name="Functions" custom="PROCEDURE" colour="%{BKY_PROCEDURES_HUE}"></category>
        <category name="Motor" colour="%{BKY_MOTORS_HUE}">
            <block type="set_motor_state"></block>
            <block type="set_motor_direction"></block>
            <block type="set_motor_power"></block>
        </category>
        <category name="Sound" colour="%{BKY_SOUND_HUE}">
            <block type="play_note"></block>
        </category>
        <category name="Sensors" colour="%{BKY_SENSORS_HUE}">
            <block type="set_sensor_type"></block>
            <block type="get_sensor_value"></block>
            <block type="battery_power"></block>
            <block type="capture_image"></block>
        </category>
        <category name="AI" colour="%{BKY_AI_HUE}">
            <block type="ai_vision"></block>
        </category>
    </xml>
`;
