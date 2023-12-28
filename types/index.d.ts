import type { FilePond as FilePondInstance, FilePondOptions } from "filepond";
import type { SvelteComponentTyped } from "svelte";

export * from "filepond";

type ComponentProps = FilePondOptions & {
  class?: string;
  id?: string;

  /** A string specifying the name of the input control. */
  name: string;

  /**
   * The Boolean multiple attribute, if set, means the form control accepts one or more values.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple
   */
  allowMultiple?: boolean;

  /**
   * The Boolean required attribute, if present, indicates that the user must specify a value for the input before the owning form can be submitted.
   **/
  required?: boolean;

  /**
   * The capture attribute specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture
   */
  captureMethod?: "user" | "environment" | boolean;

  addFile?: FilePondInstance["addFile"];
  addFiles?: FilePondInstance["addFiles"];
  removeFile?: FilePondInstance["removeFile"];
  removeFiles?: FilePondInstance["removeFiles"];
  browse?: FilePondInstance["browse"];
  getFile?: FilePondInstance["getFile"];
  getFiles?: FilePondInstance["getFiles"];
  moveFile?: FilePondInstance["moveFile"];
  prepareFile?: FilePondInstance["prepareFile"];
  prepareFiles?: FilePondInstance["prepareFiles"];
  processFile?: FilePondInstance["processFile"];
  processFiles?: FilePondInstance["processFiles"];
  sort?: FilePondInstance["sort"];
};

/**
 * The FilePond Svelte Component functions as a tiny adapter for the FilePond object so it's easier to use with Svelte.
 * @url https://pqina.nl/filepond/docs/getting-started/installation/svelte/
 */
export default class FilePond extends SvelteComponentTyped<ComponentProps> {}
