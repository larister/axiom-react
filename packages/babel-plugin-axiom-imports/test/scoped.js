/* eslint-disable no-console */

import { findComponent } from "@brandwatch/axiom-utils";

const foo = (findComponent) => findComponent();
const bar = () => findComponent();

foo(findComponent);
bar();
