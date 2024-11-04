# react-beautiful-modals

A lightweight, customizable modal component for web applications. Easy to integrate, responsive, and supports user interactions with customizable responses. Ideal for overlays, alerts, and dialogs without complex setup

## 🎉🎉 Features

- Simple setup and usage.
- Fully responsive design for all screen sizes.
- Customizable styles and behavior.
- Built-in support for user interactions and responses.
- Lightweight with minimal dependencies.
- Easily customizable via props.
- Typescript support
- [Small bundle size](https://bundlephobia.com/result?p=react-beautiful-modals)

## Example

![Example](https://res.cloudinary.com/saimun/image/upload/c_scale,w_450/v1730702819/gifmaker_me_2_xaynlw.gif)

## 1. Installation

`npm install react-beautiful-modals`

`yarn add react-beautiful-modals`

`pnpm add react-beautiful-modals`

## 2. Demo

[React-beautiful-modal](https://react-beautiful-modal.vercel.app/doc/installation)

## 3. Simple usage

```javascript
import React, { useState } from "react";
import { Modal } from "react-beautiful-modals";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <h1>You content here</h1>
    </Modal>
  );
};

export default App;
```

## 3.1 With component usage

```javascript
import React, { useState } from "react";
import {
  Modal,
  ModalCancelButton,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalSuccessButton,
  ModalTitle,
} from "react-beautiful-modals";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalHeader>
        <ModalTitle>This is modal title</ModalTitle>
      </ModalHeader>
      <ModalDescription>This is modal Description</ModalDescription>
      <ModalFooter>
        <ModalCancelButton onClose={() => setOpen(false)}>
          Cancel
        </ModalCancelButton>
        <ModalSuccessButton>Continue</ModalSuccessButton>
      </ModalFooter>
    </Modal>
  );
};

export default App;
```

# Props

## Modal Component

### Props

| Prop                       | Description                                                               | Type                              | Default   |
| -------------------------- | ------------------------------------------------------------------------- | --------------------------------- | --------- |
| **`open`**                 | Controls the visibility of the modal or modal content.                    | `boolean`                         |           |
| **`onClose`**              | Callback function to handle closing of the modal.                         | `() => void`                      |           |
| **`children`**             | Content to be displayed inside the component.                             | `React.ReactNode`                 |           |
| **`size`**                 | Size of the modal.                                                        | `"sm" | "md" | "lg"`              | `"md"`    |
| **`animationType`**        | Type of animation used for the modal.                                     | `"slide-up" | "slide-down" | "fade" | "zoom"` |           |
| **`width`**                | Custom width for the modal.                                               | `number`                          |           |
| **`disableBackdropClick`** | Disables closing the modal when clicking on the backdrop.                 | `boolean`                         | `false`   |
| **`customModalOverly`**    | Custom class name to apply additional styles or override existing styles. | `string`                          | `""`      |
| **`customModalContent`**   | Custom class name to apply additional styles or override existing styles. | `string`                          |           |

---

## Title & Description Component

### Props

| Prop                         | Description                                                               | Type                              | Default   |
| ---------------------------- | ------------------------------------------------------------------------- | --------------------------------- | --------- |
| **`children`**               | Text content of the title.                                                | `React.ReactNode`                 |           |
| **`fontSize`**               | Custom font size for the title.                                           | `string`                          |           |
| **`color`**                  | Color for the title.                                                      | `string`                          |           |
| **`textAlign`**              | Text alignment for the title.                                             | `"left" | "center"`               | `"left"`  |
| **`fontWidth`**              | Font weight for the title.                                                | `"300" | "400" | "500" | "600" | "700" | "800" | "900"` | `"400"`   |
| **`customModalTitle`**       | Custom class name to apply additional styles or override existing styles. | `string`                          | `""`      |
| **`customModalDescription`** | Custom class name to apply additional styles or override existing styles. | `string`                          |           |

---

## Button Component

### Props

| Prop                                               | Description                                                                                     | Type                              | Default      |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------- | ------------ |
| **`children`**                                     | Content displayed inside the button.                                                            | `React.ReactNode`                 |              |
| **`color`**                                        | Color theme for the button.                                                                     | `"primary" | "secondary" | "success" | "error" | "warning" | "info"` | `"primary"` |
| **`size`**                                         | Size of the button.                                                                             | `"sm" | "md" | "lg"`                      | `"md"`        |
| **`animationOnHover`**                             | Animation applied when hovering over the button.                                                | `"slide-up" | "slide-down" | "fade" | "zoom"` |              |
| **`disabled`**                                     | Disables the button when set to `true`.                                                         | `boolean`                         | `false`      |
| **`onClose`**                                      | Callback for closing the button (useful if the button is part of a modal or similar component). | `() => void`                      |              |
| **`startIcon`**                                    | Icon displayed at the start of the button.                                                      | `React.ReactNode`                 |              |
| **`endIcon`**                                      | Icon displayed at the end of the button.                                                        | `React.ReactNode`                 |              |
| **`loading`**                                      | Shows a loading spinner when `true`.                                                            | `boolean`                         | `false`      |
| **`variant`**                                      | Variant style of the button.                                                                    | `"contained" | "outline" | "text"`     | `"contained"` |
| **`customModalCancelButton`**                      | Custom class name to apply additional styles or override existing styles.                       | `string`                          | `""`         |
| **`customModalSuccessButton`**                     | Custom class name to apply additional styles or override existing styles.                       | `string`                          |              |
| **`primary,secondary,error,success,warning,info`** | Custom class name to apply additional styles or override existing styles.                       | `string`                          |              |
| **`btn-sm,btn-md,btn-lg`**                         | Custom class name to apply additional styles or override existing styles.                       | `string`                          |              |

## Divider Component

### Props

| Prop                     | Description                                                               | Type     | Default |
| ------------------------ | ------------------------------------------------------------------------- | -------- | ------- |
| **`color`**              | Color of the divider line.                                                | `string` |         |
| **`height`**             | Height of the divider line.                                               | `string` |         |
| **`customModalDivider`** | Custom class name to apply additional styles or override existing styles. | `string` | `""`    |

This documentation helps developers understand the props they can use, along with their types and defaults, including how to apply custom styles through `customClass`.
