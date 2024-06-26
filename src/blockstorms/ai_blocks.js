Blockly.Msg.AI_HUE = 190;

Blockly.Blocks["ai_vision"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("ask AI about image")
            .appendField(new Blockly.FieldTextInput("test.jpg"), "IMAGEPATH")
            .appendField("with prompt")
            .appendField(new Blockly.FieldTextInput("What's in this image?"), "PROMPT");

        this.setOutput(true);
        this.setColour(Blockly.Msg.AI_HUE);
        this.setTooltip("Responds to questions about an image using AI.");
    }
};

Blockly.Python["ai_vision"] = function(block) {
    if (!Blockly.Python.definitions_["import_base64"]) {
        Blockly.Python.definitions_["import_base64"] = "import base64";
    }

    if (!Blockly.Python.definitions_["import_requests"]) {
        Blockly.Python.definitions_["import_requests"] = "import requests";
    }

    if (!Blockly.Python.definitions_["import_json"]) {
        Blockly.Python.definitions_["import_json"] = "import json";
    }

    if (!Blockly.Python.definitions_["ai_vision"]) {
        Blockly.Python.definitions_["ai_vision"] =
`
openai_api_key = "YOUR KEY GOES HERE"

openai_headers = {
  "Content-Type": "application/json",
  "Authorization": f"Bearer {openai_api_key}"
}

def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

def ask_about_image(image_path, prompt):
  base64_image = encode_image(image_path)

  payload = {
    "model": "gpt-4o",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": prompt
          },
          {
            "type": "image_url",
            "image_url": {
              "url": f"data:image/jpeg;base64,{base64_image}"
            }
          }
        ]
      }
    ],
    "max_tokens": 300
  }

  response = requests.post("https://api.openai.com/v1/chat/completions", headers=openai_headers, json=payload)
  message_content = response.json()["choices"][0]["message"]["content"]
  return message_content
`;
    }

    const imagePath = block.getFieldValue("IMAGEPATH");
    const prompt = block.getFieldValue("PROMPT");

    const code = "(ask_about_image(\"" + imagePath + "\", \"" + prompt + "\"))";

    return [code, Blockly.Python.ORDER_ATOMIC];
};
