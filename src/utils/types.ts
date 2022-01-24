import type { CSSProperties, Plugin } from 'vue'
import type { PropType } from '@vue/runtime-core'

type OptionalKeys<T extends Record<string, unknown>> = {
  [K in keyof T]: T extends Record<K, T[K]> ? never : K
}[keyof T]

type RequiredKeys<T extends Record<string, unknown>> = Exclude<
  keyof T,
  OptionalKeys<T>
>

type MonoArgEmitter<T, Keys extends keyof T> = <K extends Keys>(
  evt: K,
  arg?: T[K]
) => void

type BiArgEmitter<T, Keys extends keyof T> = <K extends Keys>(
  evt: K,
  arg: T[K]
) => void

declare type Data = Record<string, unknown>;

declare type DefaultFactory<T> = (props: Data) => T | null | undefined;
declare interface PropOptions<T = any, D = T> {
  type?: PropType<T> | true | null;
  required?: boolean;
  default?: D | DefaultFactory<D> | null | undefined | object;
  validator?(value: unknown): boolean;
}

export declare type Prop<T, D = T> = PropOptions<T, D> | PropType<T>;

declare type InferPropType<T> = [T] extends [null] ? any : [T] extends [{
  type: null | true;
}] ? any : [T] extends [ObjectConstructor | {
  type: ObjectConstructor;
}] ? Record<string, any> : [T] extends [BooleanConstructor | {
  type: BooleanConstructor;
}] ? boolean : [T] extends [DateConstructor | {
  type: DateConstructor;
}] ? Date : [T] extends [(infer U)[] | {
  type: (infer U)[];
}] ? U extends DateConstructor ? Date | InferPropType<U> : InferPropType<U> : [T] extends [Prop<infer V, infer D>] ? unknown extends V ? D : V : T;

export type EventEmitter<T extends Record<string, unknown>> = MonoArgEmitter<
  T,
  OptionalKeys<T>
> & BiArgEmitter<T, RequiredKeys<T>>

export type AnyFunction<T> = (...args: any[]) => T

export type PartialReturnType<T extends (...args: unknown[]) => unknown> = Partial<ReturnType<T>>

export declare type RequiredKeysIn<T> = {
  [K in keyof T]: T[K] extends {
      required: true;
  } ? K : never;
}[keyof T];

export declare type ExtractRequiredPropTypes<O> = O extends object ? {
  [K in RequiredKeysIn<O>]: InferPropType<O[K]>;
} : Record<string, never>;

declare type PartialKeys<T> = Exclude<keyof T, RequiredKeysIn<T>>;

export declare type ExtractPropTypes<O> = O extends object ? {
  [K in keyof O]?: unknown;
} & // This is needed to keep the relation between the option prop and the props, allowing to use ctrl+click to navigate to the prop options. see: #3656
  {
  [K in RequiredKeysIn<O>]: InferPropType<O[K]>;
} & {
  [K in PartialKeys<O>]?: InferPropType<O[K]>;
} : {
  [K in string]: any;
};

export type SFCWithInstall<T> = T & Plugin

export type RefElement = HTMLElement | null

export type Nullable<T> = T | null

export type CustomizedHTMLElement<T> = HTMLElement & T

export type Indexable<T> = { [key: string] : T }

export type Hash<T> = Indexable<T>

export type TimeoutHandle = number

export type ComponentSize = 'large' | 'medium' | 'small' | 'mini'

export type ComponentType = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'

export type StyleValue = string | CSSProperties | Array<StyleValue>

export type Mutable<T> = { -readonly [P in keyof T]: T[P] }
