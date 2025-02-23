'use client'
import { IconButtom } from '@/components/icon-buttom'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

interface InviteLinkProp {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkProp) {
  function copyInviteClick() {
    navigator.clipboard.writeText(inviteLink)
  }
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly disabled defaultValue={inviteLink} />
      <IconButtom className="-mr-2" onClick={copyInviteClick}>
        <Copy className="size-5" />
      </IconButtom>
    </InputRoot>
  )
}
