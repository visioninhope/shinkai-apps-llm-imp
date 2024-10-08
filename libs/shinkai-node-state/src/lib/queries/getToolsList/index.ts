import { getToolsList as getToolsListAPI } from '@shinkai_network/shinkai-message-ts/api';

import { GetToolsListInput, GetToolsListOutput } from './types';

export const getToolsList = async ({
  nodeAddress,
  shinkaiIdentity,
  profile,
  my_device_encryption_sk,
  my_device_identity_sk,
  node_encryption_pk,
  profile_encryption_sk,
  profile_identity_sk,
}: GetToolsListInput): Promise<GetToolsListOutput> => {
  const response = await getToolsListAPI(
    nodeAddress,
    shinkaiIdentity,
    profile,
    shinkaiIdentity,
    profile,
    {
      my_device_encryption_sk: my_device_encryption_sk,
      my_device_identity_sk: my_device_identity_sk,
      node_encryption_pk: node_encryption_pk,
      profile_encryption_sk,
      profile_identity_sk,
    },
  );

  return response.data;
};
