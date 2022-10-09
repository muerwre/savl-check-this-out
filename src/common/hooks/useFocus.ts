import { FocusEventHandler, useCallback, useState } from "react";

export const useFocus = (initialState = false, delay = 0) => {
  const [focused, setFocused] = useState(initialState);

  const onFocus = useCallback<FocusEventHandler<unknown>>(
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      setFocused(true);
    },
    [setFocused]
  );

  const onBlur = useCallback(
    () => setTimeout(() => setFocused(false), delay),
    [delay]
  );

  return { focused, onBlur, onFocus };
};
