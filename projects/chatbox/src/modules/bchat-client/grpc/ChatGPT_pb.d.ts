import * as jspb from 'google-protobuf'



export class UserRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UserRequest;

  getEmail(): string;
  setEmail(value: string): UserRequest;

  getMessage(): string;
  setMessage(value: string): UserRequest;

  getUuid(): string;
  setUuid(value: string): UserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
  static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRequest;
  static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
  export type AsObject = {
    name: string,
    email: string,
    message: string,
    uuid: string,
  }
}

export class UserReply extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): UserReply;

  getUuid(): string;
  setUuid(value: string): UserReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserReply.AsObject;
  static toObject(includeInstance: boolean, msg: UserReply): UserReply.AsObject;
  static serializeBinaryToWriter(message: UserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserReply;
  static deserializeBinaryFromReader(message: UserReply, reader: jspb.BinaryReader): UserReply;
}

export namespace UserReply {
  export type AsObject = {
    message: string,
    uuid: string,
  }
}

export class UUIDRequest extends jspb.Message {
  getNonce(): string;
  setNonce(value: string): UUIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UUIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UUIDRequest): UUIDRequest.AsObject;
  static serializeBinaryToWriter(message: UUIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UUIDRequest;
  static deserializeBinaryFromReader(message: UUIDRequest, reader: jspb.BinaryReader): UUIDRequest;
}

export namespace UUIDRequest {
  export type AsObject = {
    nonce: string,
  }
}

export class UUIDReply extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): UUIDReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UUIDReply.AsObject;
  static toObject(includeInstance: boolean, msg: UUIDReply): UUIDReply.AsObject;
  static serializeBinaryToWriter(message: UUIDReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UUIDReply;
  static deserializeBinaryFromReader(message: UUIDReply, reader: jspb.BinaryReader): UUIDReply;
}

export namespace UUIDReply {
  export type AsObject = {
    uuid: string,
  }
}

