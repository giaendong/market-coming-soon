import {
  UseBaseMutationResult,
  useMutation,
  UseMutationOptions,
} from '@tanstack/react-query';
import { CommonErrorCodeType } from '../../../common/Common.types';
import { SendMailParams, SendMailResponses } from '../Email.types';

async function execute(
  params: SendMailParams,
): Promise<SendMailResponses> {
  try {
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    });
    if (!response.ok) {
      throw response.status;
    }
    return response.json();
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
}

export default function useSendMail(
  options: UseMutationOptions<
    SendMailResponses,
    CommonErrorCodeType,
    SendMailParams
  >,
): UseBaseMutationResult<
  SendMailResponses,
  CommonErrorCodeType,
  SendMailParams,
  unknown
> {
  return useMutation({
    mutationFn: (params: SendMailParams) => execute(params),
    ...options
  });
}