
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model projects
 * 
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>
/**
 * Model shortUrl
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type shortUrl = $Result.DefaultSelection<Prisma.$shortUrlPayload>
/**
 * Model projectList
 * 
 */
export type projectList = $Result.DefaultSelection<Prisma.$projectListPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.projects.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.projects.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shortUrl`: Exposes CRUD operations for the **shortUrl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShortUrls
    * const shortUrls = await prisma.shortUrl.findMany()
    * ```
    */
  get shortUrl(): Prisma.shortUrlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectList`: Exposes CRUD operations for the **projectList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectLists
    * const projectLists = await prisma.projectList.findMany()
    * ```
    */
  get projectList(): Prisma.projectListDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    projects: 'projects',
    shortUrl: 'shortUrl',
    projectList: 'projectList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "projects" | "shortUrl" | "projectList"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      shortUrl: {
        payload: Prisma.$shortUrlPayload<ExtArgs>
        fields: Prisma.shortUrlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shortUrlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shortUrlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shortUrlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shortUrlPayload>
          }
          findFirst: {
            args: Prisma.shortUrlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shortUrlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shortUrlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shortUrlPayload>
          }
          findMany: {
            args: Prisma.shortUrlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shortUrlPayload>[]
          }
          create: {
            args: Prisma.shortUrlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shortUrlPayload>
          }
          createMany: {
            args: Prisma.shortUrlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.shortUrlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shortUrlPayload>[]
          }
          delete: {
            args: Prisma.shortUrlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shortUrlPayload>
          }
          update: {
            args: Prisma.shortUrlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shortUrlPayload>
          }
          deleteMany: {
            args: Prisma.shortUrlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shortUrlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.shortUrlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shortUrlPayload>[]
          }
          upsert: {
            args: Prisma.shortUrlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shortUrlPayload>
          }
          aggregate: {
            args: Prisma.ShortUrlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShortUrl>
          }
          groupBy: {
            args: Prisma.shortUrlGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShortUrlGroupByOutputType>[]
          }
          count: {
            args: Prisma.shortUrlCountArgs<ExtArgs>
            result: $Utils.Optional<ShortUrlCountAggregateOutputType> | number
          }
        }
      }
      projectList: {
        payload: Prisma.$projectListPayload<ExtArgs>
        fields: Prisma.projectListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectListPayload>
          }
          findFirst: {
            args: Prisma.projectListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectListPayload>
          }
          findMany: {
            args: Prisma.projectListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectListPayload>[]
          }
          create: {
            args: Prisma.projectListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectListPayload>
          }
          createMany: {
            args: Prisma.projectListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectListPayload>[]
          }
          delete: {
            args: Prisma.projectListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectListPayload>
          }
          update: {
            args: Prisma.projectListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectListPayload>
          }
          deleteMany: {
            args: Prisma.projectListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectListPayload>[]
          }
          upsert: {
            args: Prisma.projectListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectListPayload>
          }
          aggregate: {
            args: Prisma.ProjectListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectList>
          }
          groupBy: {
            args: Prisma.projectListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectListGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectListCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectListCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    projects?: projectsOmit
    shortUrl?: shortUrlOmit
    projectList?: projectListOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: string | null
    title: string | null
    techStack: string | null
    description: string | null
    image: string | null
    startDate: Date | null
    endDate: Date | null
    topic: string | null
    LLMdump: string | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    techStack: string | null
    description: string | null
    image: string | null
    startDate: Date | null
    endDate: Date | null
    topic: string | null
    LLMdump: string | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    title: number
    techStack: number
    description: number
    image: number
    startDate: number
    endDate: number
    topic: number
    LLMdump: number
    _all: number
  }


  export type ProjectsMinAggregateInputType = {
    id?: true
    title?: true
    techStack?: true
    description?: true
    image?: true
    startDate?: true
    endDate?: true
    topic?: true
    LLMdump?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    title?: true
    techStack?: true
    description?: true
    image?: true
    startDate?: true
    endDate?: true
    topic?: true
    LLMdump?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    title?: true
    techStack?: true
    description?: true
    image?: true
    startDate?: true
    endDate?: true
    topic?: true
    LLMdump?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: string
    title: string | null
    techStack: string | null
    description: string | null
    image: string | null
    startDate: Date | null
    endDate: Date | null
    topic: string | null
    LLMdump: string | null
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    techStack?: boolean
    description?: boolean
    image?: boolean
    startDate?: boolean
    endDate?: boolean
    topic?: boolean
    LLMdump?: boolean
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    techStack?: boolean
    description?: boolean
    image?: boolean
    startDate?: boolean
    endDate?: boolean
    topic?: boolean
    LLMdump?: boolean
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    techStack?: boolean
    description?: boolean
    image?: boolean
    startDate?: boolean
    endDate?: boolean
    topic?: boolean
    LLMdump?: boolean
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectScalar = {
    id?: boolean
    title?: boolean
    techStack?: boolean
    description?: boolean
    image?: boolean
    startDate?: boolean
    endDate?: boolean
    topic?: boolean
    LLMdump?: boolean
  }

  export type projectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "techStack" | "description" | "image" | "startDate" | "endDate" | "topic" | "LLMdump", ExtArgs["result"]["projects"]>

  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      techStack: string | null
      description: string | null
      image: string | null
      startDate: Date | null
      endDate: Date | null
      topic: string | null
      LLMdump: string | null
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectsFindUniqueArgs>(args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(args: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectsFindFirstArgs>(args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectsFindManyArgs>(args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends projectsCreateArgs>(args: SelectSubset<T, projectsCreateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectsCreateManyArgs>(args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectsCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectsCreateManyAndReturnArgs>(args?: SelectSubset<T, projectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends projectsDeleteArgs>(args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectsUpdateArgs>(args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectsDeleteManyArgs>(args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectsUpdateManyArgs>(args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectsUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectsUpdateManyAndReturnArgs>(args: SelectSubset<T, projectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends projectsUpsertArgs>(args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projects model
   */
  interface projectsFieldRefs {
    readonly id: FieldRef<"projects", 'String'>
    readonly title: FieldRef<"projects", 'String'>
    readonly techStack: FieldRef<"projects", 'String'>
    readonly description: FieldRef<"projects", 'String'>
    readonly image: FieldRef<"projects", 'String'>
    readonly startDate: FieldRef<"projects", 'DateTime'>
    readonly endDate: FieldRef<"projects", 'DateTime'>
    readonly topic: FieldRef<"projects", 'String'>
    readonly LLMdump: FieldRef<"projects", 'String'>
  }
    

  // Custom InputTypes
  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }

  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects createManyAndReturn
   */
  export type projectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects updateManyAndReturn
   */
  export type projectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }

  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
  }


  /**
   * Model shortUrl
   */

  export type AggregateShortUrl = {
    _count: ShortUrlCountAggregateOutputType | null
    _min: ShortUrlMinAggregateOutputType | null
    _max: ShortUrlMaxAggregateOutputType | null
  }

  export type ShortUrlMinAggregateOutputType = {
    id: string | null
    shortUrl: string | null
    longUrl: string | null
    createdAt: Date | null
  }

  export type ShortUrlMaxAggregateOutputType = {
    id: string | null
    shortUrl: string | null
    longUrl: string | null
    createdAt: Date | null
  }

  export type ShortUrlCountAggregateOutputType = {
    id: number
    shortUrl: number
    longUrl: number
    createdAt: number
    _all: number
  }


  export type ShortUrlMinAggregateInputType = {
    id?: true
    shortUrl?: true
    longUrl?: true
    createdAt?: true
  }

  export type ShortUrlMaxAggregateInputType = {
    id?: true
    shortUrl?: true
    longUrl?: true
    createdAt?: true
  }

  export type ShortUrlCountAggregateInputType = {
    id?: true
    shortUrl?: true
    longUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ShortUrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shortUrl to aggregate.
     */
    where?: shortUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shortUrls to fetch.
     */
    orderBy?: shortUrlOrderByWithRelationInput | shortUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shortUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shortUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shortUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shortUrls
    **/
    _count?: true | ShortUrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShortUrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShortUrlMaxAggregateInputType
  }

  export type GetShortUrlAggregateType<T extends ShortUrlAggregateArgs> = {
        [P in keyof T & keyof AggregateShortUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShortUrl[P]>
      : GetScalarType<T[P], AggregateShortUrl[P]>
  }




  export type shortUrlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shortUrlWhereInput
    orderBy?: shortUrlOrderByWithAggregationInput | shortUrlOrderByWithAggregationInput[]
    by: ShortUrlScalarFieldEnum[] | ShortUrlScalarFieldEnum
    having?: shortUrlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShortUrlCountAggregateInputType | true
    _min?: ShortUrlMinAggregateInputType
    _max?: ShortUrlMaxAggregateInputType
  }

  export type ShortUrlGroupByOutputType = {
    id: string
    shortUrl: string
    longUrl: string
    createdAt: Date
    _count: ShortUrlCountAggregateOutputType | null
    _min: ShortUrlMinAggregateOutputType | null
    _max: ShortUrlMaxAggregateOutputType | null
  }

  type GetShortUrlGroupByPayload<T extends shortUrlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShortUrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShortUrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShortUrlGroupByOutputType[P]>
            : GetScalarType<T[P], ShortUrlGroupByOutputType[P]>
        }
      >
    >


  export type shortUrlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortUrl?: boolean
    longUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shortUrl"]>

  export type shortUrlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortUrl?: boolean
    longUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shortUrl"]>

  export type shortUrlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortUrl?: boolean
    longUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shortUrl"]>

  export type shortUrlSelectScalar = {
    id?: boolean
    shortUrl?: boolean
    longUrl?: boolean
    createdAt?: boolean
  }

  export type shortUrlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortUrl" | "longUrl" | "createdAt", ExtArgs["result"]["shortUrl"]>

  export type $shortUrlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shortUrl"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shortUrl: string
      longUrl: string
      createdAt: Date
    }, ExtArgs["result"]["shortUrl"]>
    composites: {}
  }

  type shortUrlGetPayload<S extends boolean | null | undefined | shortUrlDefaultArgs> = $Result.GetResult<Prisma.$shortUrlPayload, S>

  type shortUrlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shortUrlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShortUrlCountAggregateInputType | true
    }

  export interface shortUrlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shortUrl'], meta: { name: 'shortUrl' } }
    /**
     * Find zero or one ShortUrl that matches the filter.
     * @param {shortUrlFindUniqueArgs} args - Arguments to find a ShortUrl
     * @example
     * // Get one ShortUrl
     * const shortUrl = await prisma.shortUrl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shortUrlFindUniqueArgs>(args: SelectSubset<T, shortUrlFindUniqueArgs<ExtArgs>>): Prisma__shortUrlClient<$Result.GetResult<Prisma.$shortUrlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShortUrl that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shortUrlFindUniqueOrThrowArgs} args - Arguments to find a ShortUrl
     * @example
     * // Get one ShortUrl
     * const shortUrl = await prisma.shortUrl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shortUrlFindUniqueOrThrowArgs>(args: SelectSubset<T, shortUrlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shortUrlClient<$Result.GetResult<Prisma.$shortUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShortUrl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shortUrlFindFirstArgs} args - Arguments to find a ShortUrl
     * @example
     * // Get one ShortUrl
     * const shortUrl = await prisma.shortUrl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shortUrlFindFirstArgs>(args?: SelectSubset<T, shortUrlFindFirstArgs<ExtArgs>>): Prisma__shortUrlClient<$Result.GetResult<Prisma.$shortUrlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShortUrl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shortUrlFindFirstOrThrowArgs} args - Arguments to find a ShortUrl
     * @example
     * // Get one ShortUrl
     * const shortUrl = await prisma.shortUrl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shortUrlFindFirstOrThrowArgs>(args?: SelectSubset<T, shortUrlFindFirstOrThrowArgs<ExtArgs>>): Prisma__shortUrlClient<$Result.GetResult<Prisma.$shortUrlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShortUrls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shortUrlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShortUrls
     * const shortUrls = await prisma.shortUrl.findMany()
     * 
     * // Get first 10 ShortUrls
     * const shortUrls = await prisma.shortUrl.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shortUrlWithIdOnly = await prisma.shortUrl.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends shortUrlFindManyArgs>(args?: SelectSubset<T, shortUrlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shortUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShortUrl.
     * @param {shortUrlCreateArgs} args - Arguments to create a ShortUrl.
     * @example
     * // Create one ShortUrl
     * const ShortUrl = await prisma.shortUrl.create({
     *   data: {
     *     // ... data to create a ShortUrl
     *   }
     * })
     * 
     */
    create<T extends shortUrlCreateArgs>(args: SelectSubset<T, shortUrlCreateArgs<ExtArgs>>): Prisma__shortUrlClient<$Result.GetResult<Prisma.$shortUrlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShortUrls.
     * @param {shortUrlCreateManyArgs} args - Arguments to create many ShortUrls.
     * @example
     * // Create many ShortUrls
     * const shortUrl = await prisma.shortUrl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shortUrlCreateManyArgs>(args?: SelectSubset<T, shortUrlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShortUrls and returns the data saved in the database.
     * @param {shortUrlCreateManyAndReturnArgs} args - Arguments to create many ShortUrls.
     * @example
     * // Create many ShortUrls
     * const shortUrl = await prisma.shortUrl.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShortUrls and only return the `id`
     * const shortUrlWithIdOnly = await prisma.shortUrl.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends shortUrlCreateManyAndReturnArgs>(args?: SelectSubset<T, shortUrlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shortUrlPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShortUrl.
     * @param {shortUrlDeleteArgs} args - Arguments to delete one ShortUrl.
     * @example
     * // Delete one ShortUrl
     * const ShortUrl = await prisma.shortUrl.delete({
     *   where: {
     *     // ... filter to delete one ShortUrl
     *   }
     * })
     * 
     */
    delete<T extends shortUrlDeleteArgs>(args: SelectSubset<T, shortUrlDeleteArgs<ExtArgs>>): Prisma__shortUrlClient<$Result.GetResult<Prisma.$shortUrlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShortUrl.
     * @param {shortUrlUpdateArgs} args - Arguments to update one ShortUrl.
     * @example
     * // Update one ShortUrl
     * const shortUrl = await prisma.shortUrl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shortUrlUpdateArgs>(args: SelectSubset<T, shortUrlUpdateArgs<ExtArgs>>): Prisma__shortUrlClient<$Result.GetResult<Prisma.$shortUrlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShortUrls.
     * @param {shortUrlDeleteManyArgs} args - Arguments to filter ShortUrls to delete.
     * @example
     * // Delete a few ShortUrls
     * const { count } = await prisma.shortUrl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shortUrlDeleteManyArgs>(args?: SelectSubset<T, shortUrlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShortUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shortUrlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShortUrls
     * const shortUrl = await prisma.shortUrl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shortUrlUpdateManyArgs>(args: SelectSubset<T, shortUrlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShortUrls and returns the data updated in the database.
     * @param {shortUrlUpdateManyAndReturnArgs} args - Arguments to update many ShortUrls.
     * @example
     * // Update many ShortUrls
     * const shortUrl = await prisma.shortUrl.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShortUrls and only return the `id`
     * const shortUrlWithIdOnly = await prisma.shortUrl.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends shortUrlUpdateManyAndReturnArgs>(args: SelectSubset<T, shortUrlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shortUrlPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShortUrl.
     * @param {shortUrlUpsertArgs} args - Arguments to update or create a ShortUrl.
     * @example
     * // Update or create a ShortUrl
     * const shortUrl = await prisma.shortUrl.upsert({
     *   create: {
     *     // ... data to create a ShortUrl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShortUrl we want to update
     *   }
     * })
     */
    upsert<T extends shortUrlUpsertArgs>(args: SelectSubset<T, shortUrlUpsertArgs<ExtArgs>>): Prisma__shortUrlClient<$Result.GetResult<Prisma.$shortUrlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShortUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shortUrlCountArgs} args - Arguments to filter ShortUrls to count.
     * @example
     * // Count the number of ShortUrls
     * const count = await prisma.shortUrl.count({
     *   where: {
     *     // ... the filter for the ShortUrls we want to count
     *   }
     * })
    **/
    count<T extends shortUrlCountArgs>(
      args?: Subset<T, shortUrlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShortUrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShortUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShortUrlAggregateArgs>(args: Subset<T, ShortUrlAggregateArgs>): Prisma.PrismaPromise<GetShortUrlAggregateType<T>>

    /**
     * Group by ShortUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shortUrlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends shortUrlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shortUrlGroupByArgs['orderBy'] }
        : { orderBy?: shortUrlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, shortUrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShortUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shortUrl model
   */
  readonly fields: shortUrlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shortUrl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shortUrlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the shortUrl model
   */
  interface shortUrlFieldRefs {
    readonly id: FieldRef<"shortUrl", 'String'>
    readonly shortUrl: FieldRef<"shortUrl", 'String'>
    readonly longUrl: FieldRef<"shortUrl", 'String'>
    readonly createdAt: FieldRef<"shortUrl", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * shortUrl findUnique
   */
  export type shortUrlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shortUrl
     */
    select?: shortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shortUrl
     */
    omit?: shortUrlOmit<ExtArgs> | null
    /**
     * Filter, which shortUrl to fetch.
     */
    where: shortUrlWhereUniqueInput
  }

  /**
   * shortUrl findUniqueOrThrow
   */
  export type shortUrlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shortUrl
     */
    select?: shortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shortUrl
     */
    omit?: shortUrlOmit<ExtArgs> | null
    /**
     * Filter, which shortUrl to fetch.
     */
    where: shortUrlWhereUniqueInput
  }

  /**
   * shortUrl findFirst
   */
  export type shortUrlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shortUrl
     */
    select?: shortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shortUrl
     */
    omit?: shortUrlOmit<ExtArgs> | null
    /**
     * Filter, which shortUrl to fetch.
     */
    where?: shortUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shortUrls to fetch.
     */
    orderBy?: shortUrlOrderByWithRelationInput | shortUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shortUrls.
     */
    cursor?: shortUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shortUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shortUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shortUrls.
     */
    distinct?: ShortUrlScalarFieldEnum | ShortUrlScalarFieldEnum[]
  }

  /**
   * shortUrl findFirstOrThrow
   */
  export type shortUrlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shortUrl
     */
    select?: shortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shortUrl
     */
    omit?: shortUrlOmit<ExtArgs> | null
    /**
     * Filter, which shortUrl to fetch.
     */
    where?: shortUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shortUrls to fetch.
     */
    orderBy?: shortUrlOrderByWithRelationInput | shortUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shortUrls.
     */
    cursor?: shortUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shortUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shortUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shortUrls.
     */
    distinct?: ShortUrlScalarFieldEnum | ShortUrlScalarFieldEnum[]
  }

  /**
   * shortUrl findMany
   */
  export type shortUrlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shortUrl
     */
    select?: shortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shortUrl
     */
    omit?: shortUrlOmit<ExtArgs> | null
    /**
     * Filter, which shortUrls to fetch.
     */
    where?: shortUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shortUrls to fetch.
     */
    orderBy?: shortUrlOrderByWithRelationInput | shortUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shortUrls.
     */
    cursor?: shortUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shortUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shortUrls.
     */
    skip?: number
    distinct?: ShortUrlScalarFieldEnum | ShortUrlScalarFieldEnum[]
  }

  /**
   * shortUrl create
   */
  export type shortUrlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shortUrl
     */
    select?: shortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shortUrl
     */
    omit?: shortUrlOmit<ExtArgs> | null
    /**
     * The data needed to create a shortUrl.
     */
    data: XOR<shortUrlCreateInput, shortUrlUncheckedCreateInput>
  }

  /**
   * shortUrl createMany
   */
  export type shortUrlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shortUrls.
     */
    data: shortUrlCreateManyInput | shortUrlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shortUrl createManyAndReturn
   */
  export type shortUrlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shortUrl
     */
    select?: shortUrlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shortUrl
     */
    omit?: shortUrlOmit<ExtArgs> | null
    /**
     * The data used to create many shortUrls.
     */
    data: shortUrlCreateManyInput | shortUrlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shortUrl update
   */
  export type shortUrlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shortUrl
     */
    select?: shortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shortUrl
     */
    omit?: shortUrlOmit<ExtArgs> | null
    /**
     * The data needed to update a shortUrl.
     */
    data: XOR<shortUrlUpdateInput, shortUrlUncheckedUpdateInput>
    /**
     * Choose, which shortUrl to update.
     */
    where: shortUrlWhereUniqueInput
  }

  /**
   * shortUrl updateMany
   */
  export type shortUrlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shortUrls.
     */
    data: XOR<shortUrlUpdateManyMutationInput, shortUrlUncheckedUpdateManyInput>
    /**
     * Filter which shortUrls to update
     */
    where?: shortUrlWhereInput
    /**
     * Limit how many shortUrls to update.
     */
    limit?: number
  }

  /**
   * shortUrl updateManyAndReturn
   */
  export type shortUrlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shortUrl
     */
    select?: shortUrlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shortUrl
     */
    omit?: shortUrlOmit<ExtArgs> | null
    /**
     * The data used to update shortUrls.
     */
    data: XOR<shortUrlUpdateManyMutationInput, shortUrlUncheckedUpdateManyInput>
    /**
     * Filter which shortUrls to update
     */
    where?: shortUrlWhereInput
    /**
     * Limit how many shortUrls to update.
     */
    limit?: number
  }

  /**
   * shortUrl upsert
   */
  export type shortUrlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shortUrl
     */
    select?: shortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shortUrl
     */
    omit?: shortUrlOmit<ExtArgs> | null
    /**
     * The filter to search for the shortUrl to update in case it exists.
     */
    where: shortUrlWhereUniqueInput
    /**
     * In case the shortUrl found by the `where` argument doesn't exist, create a new shortUrl with this data.
     */
    create: XOR<shortUrlCreateInput, shortUrlUncheckedCreateInput>
    /**
     * In case the shortUrl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shortUrlUpdateInput, shortUrlUncheckedUpdateInput>
  }

  /**
   * shortUrl delete
   */
  export type shortUrlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shortUrl
     */
    select?: shortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shortUrl
     */
    omit?: shortUrlOmit<ExtArgs> | null
    /**
     * Filter which shortUrl to delete.
     */
    where: shortUrlWhereUniqueInput
  }

  /**
   * shortUrl deleteMany
   */
  export type shortUrlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shortUrls to delete
     */
    where?: shortUrlWhereInput
    /**
     * Limit how many shortUrls to delete.
     */
    limit?: number
  }

  /**
   * shortUrl without action
   */
  export type shortUrlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shortUrl
     */
    select?: shortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shortUrl
     */
    omit?: shortUrlOmit<ExtArgs> | null
  }


  /**
   * Model projectList
   */

  export type AggregateProjectList = {
    _count: ProjectListCountAggregateOutputType | null
    _min: ProjectListMinAggregateOutputType | null
    _max: ProjectListMaxAggregateOutputType | null
  }

  export type ProjectListMinAggregateOutputType = {
    id: string | null
    title: string | null
    techStack: string | null
    description: string | null
    image: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type ProjectListMaxAggregateOutputType = {
    id: string | null
    title: string | null
    techStack: string | null
    description: string | null
    image: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type ProjectListCountAggregateOutputType = {
    id: number
    title: number
    techStack: number
    description: number
    image: number
    startDate: number
    endDate: number
    _all: number
  }


  export type ProjectListMinAggregateInputType = {
    id?: true
    title?: true
    techStack?: true
    description?: true
    image?: true
    startDate?: true
    endDate?: true
  }

  export type ProjectListMaxAggregateInputType = {
    id?: true
    title?: true
    techStack?: true
    description?: true
    image?: true
    startDate?: true
    endDate?: true
  }

  export type ProjectListCountAggregateInputType = {
    id?: true
    title?: true
    techStack?: true
    description?: true
    image?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type ProjectListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectList to aggregate.
     */
    where?: projectListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectLists to fetch.
     */
    orderBy?: projectListOrderByWithRelationInput | projectListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projectLists
    **/
    _count?: true | ProjectListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectListMaxAggregateInputType
  }

  export type GetProjectListAggregateType<T extends ProjectListAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectList[P]>
      : GetScalarType<T[P], AggregateProjectList[P]>
  }




  export type projectListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectListWhereInput
    orderBy?: projectListOrderByWithAggregationInput | projectListOrderByWithAggregationInput[]
    by: ProjectListScalarFieldEnum[] | ProjectListScalarFieldEnum
    having?: projectListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectListCountAggregateInputType | true
    _min?: ProjectListMinAggregateInputType
    _max?: ProjectListMaxAggregateInputType
  }

  export type ProjectListGroupByOutputType = {
    id: string
    title: string | null
    techStack: string | null
    description: string | null
    image: string | null
    startDate: Date | null
    endDate: Date | null
    _count: ProjectListCountAggregateOutputType | null
    _min: ProjectListMinAggregateOutputType | null
    _max: ProjectListMaxAggregateOutputType | null
  }

  type GetProjectListGroupByPayload<T extends projectListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectListGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectListGroupByOutputType[P]>
        }
      >
    >


  export type projectListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    techStack?: boolean
    description?: boolean
    image?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["projectList"]>

  export type projectListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    techStack?: boolean
    description?: boolean
    image?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["projectList"]>

  export type projectListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    techStack?: boolean
    description?: boolean
    image?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["projectList"]>

  export type projectListSelectScalar = {
    id?: boolean
    title?: boolean
    techStack?: boolean
    description?: boolean
    image?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type projectListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "techStack" | "description" | "image" | "startDate" | "endDate", ExtArgs["result"]["projectList"]>

  export type $projectListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projectList"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      techStack: string | null
      description: string | null
      image: string | null
      startDate: Date | null
      endDate: Date | null
    }, ExtArgs["result"]["projectList"]>
    composites: {}
  }

  type projectListGetPayload<S extends boolean | null | undefined | projectListDefaultArgs> = $Result.GetResult<Prisma.$projectListPayload, S>

  type projectListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectListCountAggregateInputType | true
    }

  export interface projectListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projectList'], meta: { name: 'projectList' } }
    /**
     * Find zero or one ProjectList that matches the filter.
     * @param {projectListFindUniqueArgs} args - Arguments to find a ProjectList
     * @example
     * // Get one ProjectList
     * const projectList = await prisma.projectList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectListFindUniqueArgs>(args: SelectSubset<T, projectListFindUniqueArgs<ExtArgs>>): Prisma__projectListClient<$Result.GetResult<Prisma.$projectListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectListFindUniqueOrThrowArgs} args - Arguments to find a ProjectList
     * @example
     * // Get one ProjectList
     * const projectList = await prisma.projectList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectListFindUniqueOrThrowArgs>(args: SelectSubset<T, projectListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectListClient<$Result.GetResult<Prisma.$projectListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectListFindFirstArgs} args - Arguments to find a ProjectList
     * @example
     * // Get one ProjectList
     * const projectList = await prisma.projectList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectListFindFirstArgs>(args?: SelectSubset<T, projectListFindFirstArgs<ExtArgs>>): Prisma__projectListClient<$Result.GetResult<Prisma.$projectListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectListFindFirstOrThrowArgs} args - Arguments to find a ProjectList
     * @example
     * // Get one ProjectList
     * const projectList = await prisma.projectList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectListFindFirstOrThrowArgs>(args?: SelectSubset<T, projectListFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectListClient<$Result.GetResult<Prisma.$projectListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectLists
     * const projectLists = await prisma.projectList.findMany()
     * 
     * // Get first 10 ProjectLists
     * const projectLists = await prisma.projectList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectListWithIdOnly = await prisma.projectList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectListFindManyArgs>(args?: SelectSubset<T, projectListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectList.
     * @param {projectListCreateArgs} args - Arguments to create a ProjectList.
     * @example
     * // Create one ProjectList
     * const ProjectList = await prisma.projectList.create({
     *   data: {
     *     // ... data to create a ProjectList
     *   }
     * })
     * 
     */
    create<T extends projectListCreateArgs>(args: SelectSubset<T, projectListCreateArgs<ExtArgs>>): Prisma__projectListClient<$Result.GetResult<Prisma.$projectListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectLists.
     * @param {projectListCreateManyArgs} args - Arguments to create many ProjectLists.
     * @example
     * // Create many ProjectLists
     * const projectList = await prisma.projectList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectListCreateManyArgs>(args?: SelectSubset<T, projectListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectLists and returns the data saved in the database.
     * @param {projectListCreateManyAndReturnArgs} args - Arguments to create many ProjectLists.
     * @example
     * // Create many ProjectLists
     * const projectList = await prisma.projectList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectLists and only return the `id`
     * const projectListWithIdOnly = await prisma.projectList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectListCreateManyAndReturnArgs>(args?: SelectSubset<T, projectListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectList.
     * @param {projectListDeleteArgs} args - Arguments to delete one ProjectList.
     * @example
     * // Delete one ProjectList
     * const ProjectList = await prisma.projectList.delete({
     *   where: {
     *     // ... filter to delete one ProjectList
     *   }
     * })
     * 
     */
    delete<T extends projectListDeleteArgs>(args: SelectSubset<T, projectListDeleteArgs<ExtArgs>>): Prisma__projectListClient<$Result.GetResult<Prisma.$projectListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectList.
     * @param {projectListUpdateArgs} args - Arguments to update one ProjectList.
     * @example
     * // Update one ProjectList
     * const projectList = await prisma.projectList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectListUpdateArgs>(args: SelectSubset<T, projectListUpdateArgs<ExtArgs>>): Prisma__projectListClient<$Result.GetResult<Prisma.$projectListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectLists.
     * @param {projectListDeleteManyArgs} args - Arguments to filter ProjectLists to delete.
     * @example
     * // Delete a few ProjectLists
     * const { count } = await prisma.projectList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectListDeleteManyArgs>(args?: SelectSubset<T, projectListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectLists
     * const projectList = await prisma.projectList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectListUpdateManyArgs>(args: SelectSubset<T, projectListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectLists and returns the data updated in the database.
     * @param {projectListUpdateManyAndReturnArgs} args - Arguments to update many ProjectLists.
     * @example
     * // Update many ProjectLists
     * const projectList = await prisma.projectList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectLists and only return the `id`
     * const projectListWithIdOnly = await prisma.projectList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectListUpdateManyAndReturnArgs>(args: SelectSubset<T, projectListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectList.
     * @param {projectListUpsertArgs} args - Arguments to update or create a ProjectList.
     * @example
     * // Update or create a ProjectList
     * const projectList = await prisma.projectList.upsert({
     *   create: {
     *     // ... data to create a ProjectList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectList we want to update
     *   }
     * })
     */
    upsert<T extends projectListUpsertArgs>(args: SelectSubset<T, projectListUpsertArgs<ExtArgs>>): Prisma__projectListClient<$Result.GetResult<Prisma.$projectListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectListCountArgs} args - Arguments to filter ProjectLists to count.
     * @example
     * // Count the number of ProjectLists
     * const count = await prisma.projectList.count({
     *   where: {
     *     // ... the filter for the ProjectLists we want to count
     *   }
     * })
    **/
    count<T extends projectListCountArgs>(
      args?: Subset<T, projectListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectListAggregateArgs>(args: Subset<T, ProjectListAggregateArgs>): Prisma.PrismaPromise<GetProjectListAggregateType<T>>

    /**
     * Group by ProjectList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectListGroupByArgs['orderBy'] }
        : { orderBy?: projectListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projectList model
   */
  readonly fields: projectListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projectList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projectList model
   */
  interface projectListFieldRefs {
    readonly id: FieldRef<"projectList", 'String'>
    readonly title: FieldRef<"projectList", 'String'>
    readonly techStack: FieldRef<"projectList", 'String'>
    readonly description: FieldRef<"projectList", 'String'>
    readonly image: FieldRef<"projectList", 'String'>
    readonly startDate: FieldRef<"projectList", 'DateTime'>
    readonly endDate: FieldRef<"projectList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * projectList findUnique
   */
  export type projectListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectList
     */
    select?: projectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectList
     */
    omit?: projectListOmit<ExtArgs> | null
    /**
     * Filter, which projectList to fetch.
     */
    where: projectListWhereUniqueInput
  }

  /**
   * projectList findUniqueOrThrow
   */
  export type projectListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectList
     */
    select?: projectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectList
     */
    omit?: projectListOmit<ExtArgs> | null
    /**
     * Filter, which projectList to fetch.
     */
    where: projectListWhereUniqueInput
  }

  /**
   * projectList findFirst
   */
  export type projectListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectList
     */
    select?: projectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectList
     */
    omit?: projectListOmit<ExtArgs> | null
    /**
     * Filter, which projectList to fetch.
     */
    where?: projectListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectLists to fetch.
     */
    orderBy?: projectListOrderByWithRelationInput | projectListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectLists.
     */
    cursor?: projectListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectLists.
     */
    distinct?: ProjectListScalarFieldEnum | ProjectListScalarFieldEnum[]
  }

  /**
   * projectList findFirstOrThrow
   */
  export type projectListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectList
     */
    select?: projectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectList
     */
    omit?: projectListOmit<ExtArgs> | null
    /**
     * Filter, which projectList to fetch.
     */
    where?: projectListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectLists to fetch.
     */
    orderBy?: projectListOrderByWithRelationInput | projectListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectLists.
     */
    cursor?: projectListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectLists.
     */
    distinct?: ProjectListScalarFieldEnum | ProjectListScalarFieldEnum[]
  }

  /**
   * projectList findMany
   */
  export type projectListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectList
     */
    select?: projectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectList
     */
    omit?: projectListOmit<ExtArgs> | null
    /**
     * Filter, which projectLists to fetch.
     */
    where?: projectListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectLists to fetch.
     */
    orderBy?: projectListOrderByWithRelationInput | projectListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projectLists.
     */
    cursor?: projectListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectLists.
     */
    skip?: number
    distinct?: ProjectListScalarFieldEnum | ProjectListScalarFieldEnum[]
  }

  /**
   * projectList create
   */
  export type projectListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectList
     */
    select?: projectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectList
     */
    omit?: projectListOmit<ExtArgs> | null
    /**
     * The data needed to create a projectList.
     */
    data: XOR<projectListCreateInput, projectListUncheckedCreateInput>
  }

  /**
   * projectList createMany
   */
  export type projectListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projectLists.
     */
    data: projectListCreateManyInput | projectListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projectList createManyAndReturn
   */
  export type projectListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectList
     */
    select?: projectListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectList
     */
    omit?: projectListOmit<ExtArgs> | null
    /**
     * The data used to create many projectLists.
     */
    data: projectListCreateManyInput | projectListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projectList update
   */
  export type projectListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectList
     */
    select?: projectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectList
     */
    omit?: projectListOmit<ExtArgs> | null
    /**
     * The data needed to update a projectList.
     */
    data: XOR<projectListUpdateInput, projectListUncheckedUpdateInput>
    /**
     * Choose, which projectList to update.
     */
    where: projectListWhereUniqueInput
  }

  /**
   * projectList updateMany
   */
  export type projectListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projectLists.
     */
    data: XOR<projectListUpdateManyMutationInput, projectListUncheckedUpdateManyInput>
    /**
     * Filter which projectLists to update
     */
    where?: projectListWhereInput
    /**
     * Limit how many projectLists to update.
     */
    limit?: number
  }

  /**
   * projectList updateManyAndReturn
   */
  export type projectListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectList
     */
    select?: projectListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectList
     */
    omit?: projectListOmit<ExtArgs> | null
    /**
     * The data used to update projectLists.
     */
    data: XOR<projectListUpdateManyMutationInput, projectListUncheckedUpdateManyInput>
    /**
     * Filter which projectLists to update
     */
    where?: projectListWhereInput
    /**
     * Limit how many projectLists to update.
     */
    limit?: number
  }

  /**
   * projectList upsert
   */
  export type projectListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectList
     */
    select?: projectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectList
     */
    omit?: projectListOmit<ExtArgs> | null
    /**
     * The filter to search for the projectList to update in case it exists.
     */
    where: projectListWhereUniqueInput
    /**
     * In case the projectList found by the `where` argument doesn't exist, create a new projectList with this data.
     */
    create: XOR<projectListCreateInput, projectListUncheckedCreateInput>
    /**
     * In case the projectList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectListUpdateInput, projectListUncheckedUpdateInput>
  }

  /**
   * projectList delete
   */
  export type projectListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectList
     */
    select?: projectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectList
     */
    omit?: projectListOmit<ExtArgs> | null
    /**
     * Filter which projectList to delete.
     */
    where: projectListWhereUniqueInput
  }

  /**
   * projectList deleteMany
   */
  export type projectListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectLists to delete
     */
    where?: projectListWhereInput
    /**
     * Limit how many projectLists to delete.
     */
    limit?: number
  }

  /**
   * projectList without action
   */
  export type projectListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectList
     */
    select?: projectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectList
     */
    omit?: projectListOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    techStack: 'techStack',
    description: 'description',
    image: 'image',
    startDate: 'startDate',
    endDate: 'endDate',
    topic: 'topic',
    LLMdump: 'LLMdump'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const ShortUrlScalarFieldEnum: {
    id: 'id',
    shortUrl: 'shortUrl',
    longUrl: 'longUrl',
    createdAt: 'createdAt'
  };

  export type ShortUrlScalarFieldEnum = (typeof ShortUrlScalarFieldEnum)[keyof typeof ShortUrlScalarFieldEnum]


  export const ProjectListScalarFieldEnum: {
    id: 'id',
    title: 'title',
    techStack: 'techStack',
    description: 'description',
    image: 'image',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type ProjectListScalarFieldEnum = (typeof ProjectListScalarFieldEnum)[keyof typeof ProjectListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    id?: StringFilter<"projects"> | string
    title?: StringNullableFilter<"projects"> | string | null
    techStack?: StringNullableFilter<"projects"> | string | null
    description?: StringNullableFilter<"projects"> | string | null
    image?: StringNullableFilter<"projects"> | string | null
    startDate?: DateTimeNullableFilter<"projects"> | Date | string | null
    endDate?: DateTimeNullableFilter<"projects"> | Date | string | null
    topic?: StringNullableFilter<"projects"> | string | null
    LLMdump?: StringNullableFilter<"projects"> | string | null
  }

  export type projectsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    techStack?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    topic?: SortOrderInput | SortOrder
    LLMdump?: SortOrderInput | SortOrder
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    title?: StringNullableFilter<"projects"> | string | null
    techStack?: StringNullableFilter<"projects"> | string | null
    description?: StringNullableFilter<"projects"> | string | null
    image?: StringNullableFilter<"projects"> | string | null
    startDate?: DateTimeNullableFilter<"projects"> | Date | string | null
    endDate?: DateTimeNullableFilter<"projects"> | Date | string | null
    topic?: StringNullableFilter<"projects"> | string | null
    LLMdump?: StringNullableFilter<"projects"> | string | null
  }, "id">

  export type projectsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    techStack?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    topic?: SortOrderInput | SortOrder
    LLMdump?: SortOrderInput | SortOrder
    _count?: projectsCountOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"projects"> | string
    title?: StringNullableWithAggregatesFilter<"projects"> | string | null
    techStack?: StringNullableWithAggregatesFilter<"projects"> | string | null
    description?: StringNullableWithAggregatesFilter<"projects"> | string | null
    image?: StringNullableWithAggregatesFilter<"projects"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"projects"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"projects"> | Date | string | null
    topic?: StringNullableWithAggregatesFilter<"projects"> | string | null
    LLMdump?: StringNullableWithAggregatesFilter<"projects"> | string | null
  }

  export type shortUrlWhereInput = {
    AND?: shortUrlWhereInput | shortUrlWhereInput[]
    OR?: shortUrlWhereInput[]
    NOT?: shortUrlWhereInput | shortUrlWhereInput[]
    id?: StringFilter<"shortUrl"> | string
    shortUrl?: StringFilter<"shortUrl"> | string
    longUrl?: StringFilter<"shortUrl"> | string
    createdAt?: DateTimeFilter<"shortUrl"> | Date | string
  }

  export type shortUrlOrderByWithRelationInput = {
    id?: SortOrder
    shortUrl?: SortOrder
    longUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type shortUrlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortUrl?: string
    AND?: shortUrlWhereInput | shortUrlWhereInput[]
    OR?: shortUrlWhereInput[]
    NOT?: shortUrlWhereInput | shortUrlWhereInput[]
    longUrl?: StringFilter<"shortUrl"> | string
    createdAt?: DateTimeFilter<"shortUrl"> | Date | string
  }, "id" | "shortUrl">

  export type shortUrlOrderByWithAggregationInput = {
    id?: SortOrder
    shortUrl?: SortOrder
    longUrl?: SortOrder
    createdAt?: SortOrder
    _count?: shortUrlCountOrderByAggregateInput
    _max?: shortUrlMaxOrderByAggregateInput
    _min?: shortUrlMinOrderByAggregateInput
  }

  export type shortUrlScalarWhereWithAggregatesInput = {
    AND?: shortUrlScalarWhereWithAggregatesInput | shortUrlScalarWhereWithAggregatesInput[]
    OR?: shortUrlScalarWhereWithAggregatesInput[]
    NOT?: shortUrlScalarWhereWithAggregatesInput | shortUrlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"shortUrl"> | string
    shortUrl?: StringWithAggregatesFilter<"shortUrl"> | string
    longUrl?: StringWithAggregatesFilter<"shortUrl"> | string
    createdAt?: DateTimeWithAggregatesFilter<"shortUrl"> | Date | string
  }

  export type projectListWhereInput = {
    AND?: projectListWhereInput | projectListWhereInput[]
    OR?: projectListWhereInput[]
    NOT?: projectListWhereInput | projectListWhereInput[]
    id?: StringFilter<"projectList"> | string
    title?: StringNullableFilter<"projectList"> | string | null
    techStack?: StringNullableFilter<"projectList"> | string | null
    description?: StringNullableFilter<"projectList"> | string | null
    image?: StringNullableFilter<"projectList"> | string | null
    startDate?: DateTimeNullableFilter<"projectList"> | Date | string | null
    endDate?: DateTimeNullableFilter<"projectList"> | Date | string | null
  }

  export type projectListOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    techStack?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
  }

  export type projectListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: projectListWhereInput | projectListWhereInput[]
    OR?: projectListWhereInput[]
    NOT?: projectListWhereInput | projectListWhereInput[]
    title?: StringNullableFilter<"projectList"> | string | null
    techStack?: StringNullableFilter<"projectList"> | string | null
    description?: StringNullableFilter<"projectList"> | string | null
    image?: StringNullableFilter<"projectList"> | string | null
    startDate?: DateTimeNullableFilter<"projectList"> | Date | string | null
    endDate?: DateTimeNullableFilter<"projectList"> | Date | string | null
  }, "id">

  export type projectListOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    techStack?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    _count?: projectListCountOrderByAggregateInput
    _max?: projectListMaxOrderByAggregateInput
    _min?: projectListMinOrderByAggregateInput
  }

  export type projectListScalarWhereWithAggregatesInput = {
    AND?: projectListScalarWhereWithAggregatesInput | projectListScalarWhereWithAggregatesInput[]
    OR?: projectListScalarWhereWithAggregatesInput[]
    NOT?: projectListScalarWhereWithAggregatesInput | projectListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"projectList"> | string
    title?: StringNullableWithAggregatesFilter<"projectList"> | string | null
    techStack?: StringNullableWithAggregatesFilter<"projectList"> | string | null
    description?: StringNullableWithAggregatesFilter<"projectList"> | string | null
    image?: StringNullableWithAggregatesFilter<"projectList"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"projectList"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"projectList"> | Date | string | null
  }

  export type projectsCreateInput = {
    id: string
    title?: string | null
    techStack?: string | null
    description?: string | null
    image?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    topic?: string | null
    LLMdump?: string | null
  }

  export type projectsUncheckedCreateInput = {
    id: string
    title?: string | null
    techStack?: string | null
    description?: string | null
    image?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    topic?: string | null
    LLMdump?: string | null
  }

  export type projectsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    LLMdump?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    LLMdump?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectsCreateManyInput = {
    id: string
    title?: string | null
    techStack?: string | null
    description?: string | null
    image?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    topic?: string | null
    LLMdump?: string | null
  }

  export type projectsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    LLMdump?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    LLMdump?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shortUrlCreateInput = {
    id: string
    shortUrl: string
    longUrl: string
    createdAt?: Date | string
  }

  export type shortUrlUncheckedCreateInput = {
    id: string
    shortUrl: string
    longUrl: string
    createdAt?: Date | string
  }

  export type shortUrlUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    longUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type shortUrlUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    longUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type shortUrlCreateManyInput = {
    id: string
    shortUrl: string
    longUrl: string
    createdAt?: Date | string
  }

  export type shortUrlUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    longUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type shortUrlUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    longUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectListCreateInput = {
    id: string
    title?: string | null
    techStack?: string | null
    description?: string | null
    image?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type projectListUncheckedCreateInput = {
    id: string
    title?: string | null
    techStack?: string | null
    description?: string | null
    image?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type projectListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectListCreateManyInput = {
    id: string
    title?: string | null
    techStack?: string | null
    description?: string | null
    image?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type projectListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type projectsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    techStack?: SortOrder
    description?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    topic?: SortOrder
    LLMdump?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    techStack?: SortOrder
    description?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    topic?: SortOrder
    LLMdump?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    techStack?: SortOrder
    description?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    topic?: SortOrder
    LLMdump?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type shortUrlCountOrderByAggregateInput = {
    id?: SortOrder
    shortUrl?: SortOrder
    longUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type shortUrlMaxOrderByAggregateInput = {
    id?: SortOrder
    shortUrl?: SortOrder
    longUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type shortUrlMinOrderByAggregateInput = {
    id?: SortOrder
    shortUrl?: SortOrder
    longUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type projectListCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    techStack?: SortOrder
    description?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type projectListMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    techStack?: SortOrder
    description?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type projectListMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    techStack?: SortOrder
    description?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}