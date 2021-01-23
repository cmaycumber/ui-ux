import * as React from "react";
import { Button, View } from "react-native";
import {
  useView,
  Compiler,
  Knobs,
  Editor,
  Error,
  ActionButtons,
  Placeholder,
  PropTypes,
} from "react-view";

export default () => {
  const params = useView({
    componentName: "Button",
    props: {
      title: {
        value: "Hello",
        type: PropTypes.String,
        description: "Visible label.",
      },
      onPress: {
        value: '() => alert("click")',
        type: PropTypes.Function,
        description: "Function called when button is clicked.",
      },
      disabled: {
        value: false,
        type: PropTypes.Boolean,
        description: "Indicates that the button is disabled",
      },
    },
    scope: {
      Button,
    },
    imports: {
      "react-native": {
        named: ["Button"],
      },
    },
  });

  return (
    <React.Fragment>
      <View
        style={{
          borderColor: "black",
          borderStyle: "dashed",
          borderWidth: 1,
        }}
      >
        <Compiler
          {...params.compilerProps}
          minHeight={62}
          placeholder={Placeholder}
        />
      </View>
      <Error msg={params.errorProps.msg} isPopup />
      <Knobs {...params.knobProps} />
      <Editor {...params.editorProps} />
      <Error {...params.errorProps} />
      <ActionButtons {...params.actions} />
    </React.Fragment>
  );
};
