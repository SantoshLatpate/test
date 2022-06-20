import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PlayerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Player {
  readonly id: string;
  readonly Name?: string | null;
  readonly Team?: string | null;
  readonly detail?: string | null;
  readonly Gread?: number | null;
  readonly Type?: string | null;
  readonly image?: string | null;
  readonly Country?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Player, PlayerMetaData>);
  static copyOf(source: Player, mutator: (draft: MutableModel<Player, PlayerMetaData>) => MutableModel<Player, PlayerMetaData> | void): Player;
}