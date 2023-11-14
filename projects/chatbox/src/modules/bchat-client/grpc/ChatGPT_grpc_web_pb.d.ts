import * as grpcWeb from 'grpc-web';

import * as ChatGPT_pb from './ChatGPT_pb'; // proto import: "ChatGPT.proto"


export class ChatProtocolClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  discoverMe(
    request: ChatGPT_pb.UserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ChatGPT_pb.UserReply) => void
  ): grpcWeb.ClientReadableStream<ChatGPT_pb.UserReply>;

  generateUUID(
    request: ChatGPT_pb.UUIDRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ChatGPT_pb.UUIDReply) => void
  ): grpcWeb.ClientReadableStream<ChatGPT_pb.UUIDReply>;

}

export class ChatProtocolPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  discoverMe(
    request: ChatGPT_pb.UserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ChatGPT_pb.UserReply>;

  generateUUID(
    request: ChatGPT_pb.UUIDRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ChatGPT_pb.UUIDReply>;

}

