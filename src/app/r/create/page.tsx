'use client'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { toast } from '@/hooks/use-toast'
import { useCustomToasts } from '@/hooks/use-custom-toasts'
import { CreateSubredditPayload } from '@/lib/validators/subreddit'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Page = () => {
  const router = useRouter()
  const [input, setInput] = useState<string>('')
  const { loginToast } = useCustomToasts()

  const { mutate: createCommunity, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateSubredditPayload = {
        name: input,
      }

      const { data } = await axios.post('/api/subreddit', payload)
      return data as string
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) {
          return toast({
            title: 'Subreddit already exists.',
            description: 'Please choose a different name.',
            variant: 'destructive',
          })
        }

        if (err.response?.status === 422) {
          return toast({
            title: 'Invalid subreddit name.',
            description: 'Please choose a name between 3 and 21 letters.',
            variant: 'destructive',
          })
        }

        if (err.response?.status === 401) {
          return loginToast()
        }
      }

      toast({
        title: 'There was an error.',
        description: 'Could not create subreddit.',
        variant: 'destructive',
      })
    },
    onSuccess: (data) => {
      router.push(`/r/${data}`)
    },
  })

  return (
    <div className="container flex items-center h-full max-w-3xl mx-auto">
  <div className="relative bg-black w-full h-fit p-4 rounded-lg space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-semibold text-blue-400">Create a Topic</h1>
    </div>

    <hr className="bg-red-500 h-px" />

    <div>
      <p className="text-lg font-medium text-blue-300">Name</p>
      <p className="text-xs pb-2 text-gray-400">
        Topic names, including capitalization, cannot be changed.
      </p>
      <div className="relative">
        <p className="absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-gray-500">
          
        </p>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="pl-6 bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
        />
      </div>
    </div>

    <div className="flex justify-end gap-4">
      <Button
        disabled={isLoading}
        variant="subtle"
        onClick={() => router.back()}
        className="text-gray-800 hover:text-red-500 hover:bg-gray-700"
      >
        Cancel
      </Button>
      <Button
        isLoading={isLoading}
        disabled={input.length === 0}
        onClick={() => createCommunity()}
        className="bg-red-500 text-white hover:bg-red-600 disabled:bg-gray-700"
      >
        Create Topic
      </Button>
    </div>
  </div>
</div>

  )
}

export default Page
