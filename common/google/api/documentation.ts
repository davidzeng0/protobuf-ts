/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * `Documentation` provides the information for describing a service.
 *
 * Example:
 * <pre><code>documentation:
 *   summary: >
 *     The Google Calendar API gives access
 *     to most calendar features.
 *   pages:
 *   - name: Overview
 *     content: &#40;== include google/foo/overview.md ==&#41;
 *   - name: Tutorial
 *     content: &#40;== include google/foo/tutorial.md ==&#41;
 *     subpages;
 *     - name: Java
 *       content: &#40;== include google/foo/tutorial_java.md ==&#41;
 *   rules:
 *   - selector: google.calendar.Calendar.Get
 *     description: >
 *       ...
 *   - selector: google.calendar.Calendar.Put
 *     description: >
 *       ...
 * </code></pre>
 * Documentation is provided in markdown syntax. In addition to
 * standard markdown features, definition lists, tables and fenced
 * code blocks are supported. Section headers can be provided and are
 * interpreted relative to the section nesting of the context where
 * a documentation fragment is embedded.
 *
 * Documentation from the IDL is merged with documentation defined
 * via the config at normalization time, where documentation provided
 * by config rules overrides IDL provided.
 *
 * A number of constructs specific to the API platform are supported
 * in documentation text.
 *
 * In order to reference a proto element, the following
 * notation can be used:
 * <pre><code>&#91;fully.qualified.proto.name]&#91;]</code></pre>
 * To override the display text used for the link, this can be used:
 * <pre><code>&#91;display text]&#91;fully.qualified.proto.name]</code></pre>
 * Text can be excluded from doc using the following notation:
 * <pre><code>&#40;-- internal comment --&#41;</code></pre>
 *
 * A few directives are available in documentation. Note that
 * directives must appear on a single line to be properly
 * identified. The `include` directive includes a markdown file from
 * an external source:
 * <pre><code>&#40;== include path/to/file ==&#41;</code></pre>
 * The `resource_for` directive marks a message to be the resource of
 * a collection in REST view. If it is not specified, tools attempt
 * to infer the resource from the operations in a collection:
 * <pre><code>&#40;== resource_for v1.shelves.books ==&#41;</code></pre>
 * The directive `suppress_warning` does not directly affect documentation
 * and is documented together with service config validation.
 */
export interface Documentation {
  /**
   * A short description of what the service does. The summary must be plain
   * text. It becomes the overview of the service displayed in Google Cloud
   * Console.
   * NOTE: This field is equivalent to the standard field `description`.
   */
  summary?:
    | string
    | undefined;
  /** The top level pages for the documentation set. */
  pages?:
    | Page[]
    | undefined;
  /**
   * A list of documentation rules that apply to individual API elements.
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules?:
    | DocumentationRule[]
    | undefined;
  /** The URL to the root of documentation. */
  documentation_root_url?:
    | string
    | undefined;
  /**
   * Specifies the service root url if the default one (the service name
   * from the yaml file) is not suitable. This can be seen in any fully
   * specified service urls as well as sections that show a base that other
   * urls are relative to.
   */
  service_root_url?:
    | string
    | undefined;
  /**
   * Declares a single overview page. For example:
   * <pre><code>documentation:
   *   summary: ...
   *   overview: &#40;== include overview.md ==&#41;
   * </code></pre>
   * This is a shortcut for the following declaration (using pages style):
   * <pre><code>documentation:
   *   summary: ...
   *   pages:
   *   - name: Overview
   *     content: &#40;== include overview.md ==&#41;
   * </code></pre>
   * Note: you cannot specify both `overview` field and `pages` field.
   */
  overview?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** A documentation rule provides information about individual API elements. */
export interface DocumentationRule {
  /**
   * The selector is a comma-separated list of patterns for any element such as
   * a method, a field, an enum value. Each pattern is a qualified name of the
   * element which may end in "*", indicating a wildcard. Wildcards are only
   * allowed at the end and for a whole component of the qualified name,
   * i.e. "foo.*" is ok, but not "foo.b*" or "foo.*.bar". A wildcard will match
   * one or more components. To specify a default for all applicable elements,
   * the whole pattern "*" is used.
   */
  selector?:
    | string
    | undefined;
  /**
   * Description of the selected proto element (e.g. a message, a method, a
   * 'service' definition, or a field). Defaults to leading & trailing comments
   * taken from the proto source definition of the proto element.
   */
  description?:
    | string
    | undefined;
  /**
   * Deprecation description of the selected element(s). It can be provided if
   * an element is marked as `deprecated`.
   */
  deprecation_description?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Represents a documentation page. A page can contain subpages to represent
 * nested documentation set structure.
 */
export interface Page {
  /**
   * The name of the page. It will be used as an identity of the page to
   * generate URI of the page, text of the link to this page in navigation,
   * etc. The full page name (start from the root page name to this page
   * concatenated with `.`) can be used as reference to the page in your
   * documentation. For example:
   * <pre><code>pages:
   * - name: Tutorial
   *   content: &#40;== include tutorial.md ==&#41;
   *   subpages:
   *   - name: Java
   *     content: &#40;== include tutorial_java.md ==&#41;
   * </code></pre>
   * You can reference `Java` page using Markdown reference link syntax:
   * `[Java][Tutorial.Java]`.
   */
  name?:
    | string
    | undefined;
  /**
   * The Markdown content of the page. You can use <code>&#40;== include {path}
   * ==&#41;</code> to include content from a Markdown file. The content can be
   * used to produce the documentation page such as HTML format page.
   */
  content?:
    | string
    | undefined;
  /**
   * Subpages of this page. The order of subpages specified here will be
   * honored in the generated docset.
   */
  subpages?: Page[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseDocumentation(): Documentation {
  return {};
}

export const Documentation = {
  encode(message: Documentation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.summary !== undefined && message.summary !== "") {
      writer.uint32(10).string(message.summary);
    }
    if (message.pages !== undefined && message.pages.length !== 0) {
      for (const v of message.pages) {
        Page.encode(v!, writer.uint32(42).fork()).ldelim();
      }
    }
    if (message.rules !== undefined && message.rules.length !== 0) {
      for (const v of message.rules) {
        DocumentationRule.encode(v!, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.documentation_root_url !== undefined && message.documentation_root_url !== "") {
      writer.uint32(34).string(message.documentation_root_url);
    }
    if (message.service_root_url !== undefined && message.service_root_url !== "") {
      writer.uint32(50).string(message.service_root_url);
    }
    if (message.overview !== undefined && message.overview !== "") {
      writer.uint32(18).string(message.overview);
    }
    if (message._unknownFields !== undefined) {
      for (const [key, values] of Object.entries(message._unknownFields)) {
        const tag = parseInt(key, 10);
        for (const value of values) {
          writer.uint32(tag);
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Documentation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocumentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.summary = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          if (message.pages === undefined) {
            message.pages = [];
          }
          message.pages!.push(Page.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          if (message.rules === undefined) {
            message.rules = [];
          }
          message.rules!.push(DocumentationRule.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.documentation_root_url = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.service_root_url = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.overview = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      const startPos = reader.pos;
      reader.skipType(tag & 7);
      const buf = reader.buf.slice(startPos, reader.pos);

      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      const list = message._unknownFields[tag];

      if (list === undefined) {
        message._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): Documentation {
    return {
      summary: isSet(object.summary) ? String(object.summary) : undefined,
      pages: Array.isArray(object?.pages) ? object.pages.map((e: any) => Page.fromJSON(e)) : undefined,
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => DocumentationRule.fromJSON(e)) : undefined,
      documentation_root_url: isSet(object.documentation_root_url) ? String(object.documentation_root_url) : undefined,
      service_root_url: isSet(object.service_root_url) ? String(object.service_root_url) : undefined,
      overview: isSet(object.overview) ? String(object.overview) : undefined,
    };
  },

  toJSON(message: Documentation): unknown {
    const obj: any = {};
    if (message.summary !== undefined && message.summary !== "") {
      obj.summary = message.summary;
    }
    if (message.pages?.length) {
      obj.pages = message.pages.map((e) => Page.toJSON(e));
    }
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => DocumentationRule.toJSON(e));
    }
    if (message.documentation_root_url !== undefined && message.documentation_root_url !== "") {
      obj.documentation_root_url = message.documentation_root_url;
    }
    if (message.service_root_url !== undefined && message.service_root_url !== "") {
      obj.service_root_url = message.service_root_url;
    }
    if (message.overview !== undefined && message.overview !== "") {
      obj.overview = message.overview;
    }
    return obj;
  },
};

function createBaseDocumentationRule(): DocumentationRule {
  return {};
}

export const DocumentationRule = {
  encode(message: DocumentationRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined && message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.description !== undefined && message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.deprecation_description !== undefined && message.deprecation_description !== "") {
      writer.uint32(26).string(message.deprecation_description);
    }
    if (message._unknownFields !== undefined) {
      for (const [key, values] of Object.entries(message._unknownFields)) {
        const tag = parseInt(key, 10);
        for (const value of values) {
          writer.uint32(tag);
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DocumentationRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocumentationRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deprecation_description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      const startPos = reader.pos;
      reader.skipType(tag & 7);
      const buf = reader.buf.slice(startPos, reader.pos);

      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      const list = message._unknownFields[tag];

      if (list === undefined) {
        message._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): DocumentationRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      deprecation_description: isSet(object.deprecation_description)
        ? String(object.deprecation_description)
        : undefined,
    };
  },

  toJSON(message: DocumentationRule): unknown {
    const obj: any = {};
    if (message.selector !== undefined && message.selector !== "") {
      obj.selector = message.selector;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.deprecation_description !== undefined && message.deprecation_description !== "") {
      obj.deprecation_description = message.deprecation_description;
    }
    return obj;
  },
};

function createBasePage(): Page {
  return {};
}

export const Page = {
  encode(message: Page, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.content !== undefined && message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    if (message.subpages !== undefined && message.subpages.length !== 0) {
      for (const v of message.subpages) {
        Page.encode(v!, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message._unknownFields !== undefined) {
      for (const [key, values] of Object.entries(message._unknownFields)) {
        const tag = parseInt(key, 10);
        for (const value of values) {
          writer.uint32(tag);
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Page {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.content = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          if (message.subpages === undefined) {
            message.subpages = [];
          }
          message.subpages!.push(Page.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      const startPos = reader.pos;
      reader.skipType(tag & 7);
      const buf = reader.buf.slice(startPos, reader.pos);

      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      const list = message._unknownFields[tag];

      if (list === undefined) {
        message._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): Page {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      content: isSet(object.content) ? String(object.content) : undefined,
      subpages: Array.isArray(object?.subpages) ? object.subpages.map((e: any) => Page.fromJSON(e)) : undefined,
    };
  },

  toJSON(message: Page): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.content !== undefined && message.content !== "") {
      obj.content = message.content;
    }
    if (message.subpages?.length) {
      obj.subpages = message.subpages.map((e) => Page.toJSON(e));
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
