import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Mateus Holanda</Text>
          <Text color="gray.300" fontSize="small">
            mateus23ita@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Mateus Holanda" src="https://github.com/mateus-holanda.png" />
    </Flex>
  )
}