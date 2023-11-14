import * as ChatGPT_pb from "./grpc/ChatGPT_pb";
import * as ChatGPT_grpc_web_pb from "./grpc/ChatGPT_grpc_web_pb";

const chatGPTService = new ChatGPT_grpc_web_pb.ChatProtocolClient(
  "https://chat.banatica.com"
);

const request = new ChatGPT_pb.UUIDRequest();
request.setNonce("1");
const metadata = {"content-type": "application/grpc"};
export const createConversation = () => {
  return chatGPTService.generateUUID(request, metadata, (error, response) => {
    console.log(response.getUuid());
    return response;
  });
};

export default {
  createConversation: createConversation,
};
