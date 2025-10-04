import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText.trim());
      setTaskText('');
      showSuccess('Task added successfully!');
    } else {
      showError('Task cannot be empty.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 p-4">
      <Input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit">
        <PlusCircle className="mr-2 h-4 w-4" /> Add Task
      </Button>
    </form>
  );
};

export default TaskInput;