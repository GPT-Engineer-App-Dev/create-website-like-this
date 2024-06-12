import { Box, VStack, HStack, Text, Icon, Divider } from "@chakra-ui/react";
import { FaLink, FaCog, FaCodeBranch } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

const Index = () => {
  return (
    <Box p={4}>
      <VStack align="stretch" spacing={4}>
        <HStack>
          <Icon as={FaLink} />
          <Text>initial-todo-app-agent</Text>
          <Text color="red.500">31.52s</Text>
          <Text color="gray.500">3,034</Text>
        </HStack>
        <HStack pl={8}>
          <Icon as={SiOpenai} />
          <Text>ChatOpenAI</Text>
          <Text color="red.500">27.44s</Text>
          <Text color="gray.500">3,034</Text>
        </HStack>
        <Divider />
        <HStack pl={8}>
          <Icon as={FaCog} />
          <Text>implement</Text>
          <Text color="red.500">119.85s</Text>
        </HStack>
        <HStack pl={16}>
          <Icon as={FaCodeBranch} />
          <Text>edit-file</Text>
          <Text color="green.500">0.10s</Text>
        </HStack>
        <HStack pl={16}>
          <Icon as={FaCodeBranch} />
          <Text>Build Project</Text>
          <Text color="red.500">31.96s</Text>
        </HStack>
        <HStack pl={16}>
          <Icon as={FaCodeBranch} />
          <Text>Lint Project</Text>
          <Text color="green.500">1.26s</Text>
        </HStack>
        <HStack pl={16}>
          <Icon as={FaCodeBranch} />
          <Text>push</Text>
          <Text color="red.500">77.06s</Text>
        </HStack>
        <HStack pl={16}>
          <Icon as={FaCodeBranch} />
          <Text>Build Project</Text>
          <Text color="red.500">7.07s</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;