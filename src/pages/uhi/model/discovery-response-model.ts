import { Context } from "./classes/context";
import { DiscoveryMessage } from "./classes/discovery-message";

export class DiscoveryResponseModel {
  context: Context;
  message: DiscoveryMessage;

  static fromJson(json: Record<string, any>) {
    const obj = new DiscoveryResponseModel();
    obj.context =
      json["context"] != null ? Context.fromJson(json["context"]) : null;
    obj.message =
      json["message"] != null
        ? DiscoveryMessage.fromJson(json["message"])
        : null;

    return obj;
  }
  toJson() {
    const data: Record<string, any> = {};
    if (this.context != null) {
      data["context"] = this.context!.toJson();
    }
    if (this.message != null) {
      data["message"] = this.message!.toJson();
    }
    return data;
  }
}
