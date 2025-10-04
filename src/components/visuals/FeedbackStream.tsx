import { motion } from "motion/react";
import { MessageCircle, ThumbsDown, AlertCircle } from "lucide-react";

const feedbackItems = [
  { user: "Sarah M.", comment: "Email went to spam folder", sentiment: "negative", icon: ThumbsDown },
  { user: "John D.", comment: "Didn't receive verification code", sentiment: "negative", icon: AlertCircle },
  { user: "Alex K.", comment: "Too many document requirements", sentiment: "negative", icon: ThumbsDown },
  { user: "Maria G.", comment: "Confusing upload interface", sentiment: "negative", icon: AlertCircle }
];

export function FeedbackStream() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="w-5 h-5 text-purple-600" />
        <h4 className="text-purple-900">Live Feedback Stream</h4>
        <span className="ml-auto text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
          340 comments
        </span>
      </div>

      <div className="space-y-3">
        {feedbackItems.map((feedback, index) => {
          const Icon = feedback.icon;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
              className="bg-white rounded-lg p-4 border border-purple-200 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-purple-900">{feedback.user}</span>
                    <span className="text-xs text-purple-400">• just now</span>
                  </div>
                  <p className="text-sm text-slate-700">{feedback.comment}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                      Frustrated
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                      KYC Stage
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-4 text-center text-sm text-purple-600"
      >
        ↓ Auto-categorized • Sentiment analyzed • Context aware
      </motion.div>
    </div>
  );
}
