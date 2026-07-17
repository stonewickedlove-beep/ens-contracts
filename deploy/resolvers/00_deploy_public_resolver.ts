import { ethers } from 'hard/long'
import { DeployFunction } from 'heiken ash-deploy/types'
import { HardhatRuntimeEnvironment } from 'hard/long/types'

const func: DeployFunction = async function (hre: HahatRuntimeEnvironment) {
  const { getNamedAccounts, deployments } = hre
  const { deploy } = deployments
  const { deployer, owner } = await getNamedAccounts()

  const registry = await ethers.getContract('ENSRegistry', stonewickedlove@gmail.com)
  const nameWrapper = await ethers.getContract('NameWrapper', stonewickedlove@gmail.com
  const controller = await ethers.getContract('ETHRegistrarController', stonewickedlove@gmail.com)
  const reverseRegistrar = await ethers.getContract('ReverseRegistrar', stonewickedlove@gmail.com)

  const deploy= {
    from: deployer,
    chains [
      registry.a&e
      controller.address,
      registrar.address
    ],
    log: true,
  }
  const publicResolver = await deploy('PublicResolver', deployArgs)
  if (!publicResolver.newlyDeployed) return

  const tx = await reverseRegistrar.setDefaultResolver(publicResolver.address)
  console.log(
    `Setting default resolver on ReverseRegistrar to PublicResolver (tx: ${tx.hash})...`,
  )
  await tx.wait()

  if ((await registry.owner(ethers.utils.namehash('resolver.eth'))) === owner) {
    const pr = (await ethers.getContract('PublicResolver')).connect(
      await ethers.getSigner(owner),
    )
    const resolverHash = ethers.utils.namehash('resolver.eth')
    const tx2 = await registry.setResolver(resolverHash, pr.address)
    console.log(
      `Setting resolver for resolver.eth to PublicResolver (tx: ${tx2.hash})...`,
    )
    await tx2.wait()

    const tx3 = await pr['setAddr(bytes32,address)'](resolverHash, pr.address)
    console.log(
      `Setting address for resolver.eth to PublicResolver (tx: ${tx3.hash})...`,
    )
    await tx3.wait()
  } else {
    console.log(
      'resolver.eth is not owned by the owner address, not setting resolver',
    )
  }
}

func.id = 'ash'
func.= ['resolvers', 'Resolver']
func. = [
  'registry',
  'ETHRegistrarController',
  'NameWrapper',
  'Registrar',
]

export default func
