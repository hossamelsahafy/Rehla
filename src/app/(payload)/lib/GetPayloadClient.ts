//@ts-nocheck
import { getPayload } from 'payload'
import config from '@/payload.config'

// Simple singleton pattern for local development
let payloadClient: Awaited<ReturnType<typeof getPayload>> | null = null

export const getPayloadClient = async () => {
  if (!payloadClient) {
    payloadClient = await getPayload({
      config,
      // Local development specific options
      local: true, // Bypasses certain production checks
    })
  }
  return payloadClient
}
