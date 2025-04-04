'use client'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import ShweayButton from '@/components/ui/shweay-button'
import { Textarea } from '@/components/ui/text-area'

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters',
    })
    .max(50, {
      message: 'Name cannot exceed 50 characters',
    })
    .regex(/^[a-zA-Z\s]*$/, {
      message: 'Name can only contain letters and spaces',
    })
    .transform((val) => val.trim()),

  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .min(5, { message: 'Email must be at least 5 characters' })
    .max(100, { message: 'Email cannot exceed 100 characters' })
    .toLowerCase()
    .trim(),

  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^(\+91[\-\s]?)?[6789]\d{9}$/.test(val), {
      message: 'Please enter a valid Indian mobile number',
    }),

  message: z
    .string()
    .max(200, {
      message: 'Message cannot exceed 200 characters',
    })
    .optional()
    .transform((val) => val?.trim() ?? ''),
})

export default function MyForm() {
  const form = useForm({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={() => toast('Submitted')}
        className="flex flex-col flex-grow overflow-hidden w-full h-full"
        style={{
          padding: 'clamp(1rem, 0.4853rem + 2.0956vw, 3rem)',
          gap: 'clamp(1rem, 0.8713rem + 0.5239vw, 1.5rem)',
        }}
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Name" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email ID</FormLabel>
              <FormControl>
                <Input placeholder="xyz@gmail.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+91" type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Write a message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end mt-auto">
          <div
            style={{
              width: 'clamp(108px, 15vw, 180px)',
              height: 'clamp(40px, 6vw, 72px)',
            }}
          >
            <ShweayButton label="contact" />
          </div>
        </div>
      </form>
    </Form>
  )
}
