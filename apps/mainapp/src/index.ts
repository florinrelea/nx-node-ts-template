import { foo } from '~/lib/module'
import { util  } from '@nx-node-ts-template/shared/utils'

async function main() {
  console.log(foo)
  console.log(util)
}

main()

