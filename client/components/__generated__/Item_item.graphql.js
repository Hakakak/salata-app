/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Item_item$ref: FragmentReference;
declare export opaque type Item_item$fragmentType: Item_item$ref;
export type Item_item = {|
  +id: ?string,
  +name: ?string,
  +quantity: ?number,
  +$refType: Item_item$ref,
|};
export type Item_item$data = Item_item;
export type Item_item$key = {
  +$data?: Item_item$data,
  +$fragmentRefs: Item_item$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Item_item",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "quantity",
      "storageKey": null
    }
  ],
  "type": "ItemType",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '181df0e4a074a465de38995d7d8a6485';

module.exports = node;
