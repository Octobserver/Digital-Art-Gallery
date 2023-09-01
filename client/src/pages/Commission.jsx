import React, { useState } from 'react';
import { Box, Flex, Text, VStack, FormControl, FormLabel, Input, Checkbox, Textarea, Button } from '@chakra-ui/react';

function Commission() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [deadline, setDeadline] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [description, setDescription] = useState('');
    const [showDescriptionSection, setShowDescriptionSection] = useState(false);

    const handleOptionSelect = (option) => {
        if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
        setSelectedOptions([...selectedOptions, option]);
        }
        setShowDescriptionSection(selectedOptions.length > 0 || selectedOptions.includes(option));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', {
          name,
          email,
          phone,
          deadline,
          selectedOptions,
          description
        });
    };

    return (
        <Box p={8}>
          <form onSubmit={handleSubmit}>
                <Flex direction="column">
                    <VStack spacing={4} align="start">
                        <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input value={name} onChange={e => setName(e.target.value)} required />
                        </FormControl>
                        <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                        </FormControl>
                        <FormControl>
                        <FormLabel>Phone Number</FormLabel>
                        <Input value={phone} onChange={e => setPhone(e.target.value)} required />
                        </FormControl>
                        <FormControl>
                        <FormLabel>Date of Request</FormLabel>
                        <Input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} required />
                        </FormControl>
                    </VStack>

                    <VStack spacing={4} align="start" mt={6}>
                        <Text>Select up to 2 options:</Text>
                        <Checkbox isChecked={selectedOptions.includes('Option 1')} onChange={() => handleOptionSelect('Option 1')}>
                            Option 1
                        </Checkbox>
                        <Checkbox isChecked={selectedOptions.includes('Option 2')} onChange={() => handleOptionSelect('Option 2')}>
                            Option 2
                        </Checkbox>
                        <Checkbox isChecked={selectedOptions.includes('Option 3')} onChange={() => handleOptionSelect('Option 3')}>
                            Option 3
                        </Checkbox>
                        <Checkbox isChecked={selectedOptions.includes('Option 4')} onChange={() => handleOptionSelect('Option 4')}>
                            Option 4
                        </Checkbox>
                        <Checkbox isChecked={selectedOptions.includes('Option 5')} onChange={() => handleOptionSelect('Option 5')}>
                            Option 5
                        </Checkbox>
                    </VStack>

                    {showDescriptionSection && (
                        <FormControl mt={6}>
                            <FormLabel>Description</FormLabel>
                            <Textarea value={description} onChange={e => setDescription(e.target.value)} required />
                        </FormControl>
                    )}

                    <Button type="submit" colorScheme="blue" mt={6}>
                            Submit
                    </Button>
                </Flex>
            </form>
        </Box>
    );
}

export default Commission;