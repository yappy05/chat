import type { MassageModel } from "./massage.model.tsx";

export interface MassageStoreModel {
  massages: MassageModel[];
  add: (massage: MassageModel) => void;
  addMany: (massage: MassageModel[]) => void;
}
