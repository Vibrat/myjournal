import * as ChatGPT_pb from "./grpc/ChatGPT_pb";
import * as ChatGPT_grpc_web_pb from "./grpc/ChatGPT_grpc_web_pb";

const chatGPTService = new ChatGPT_grpc_web_pb.ChatProtocolClient(
  "chat.banatica.com:5558"
);

const request = new ChatGPT_pb.UUIDRequest();
request.setNonce("1");

export const createConversation = () => {
  return chatGPTService.generateUUID(request, undefined, (error, response) => {
    console.log(response);
    return response;
  });
};

export default {
  createConversation: createConversation,
};
